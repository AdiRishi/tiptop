import { Env } from '.';
import serverModule from './index';
import { describe, expect, it, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { unstable_dev } from 'wrangler';
import type { UnstableDevWorker } from 'wrangler';

describe('apex-gateway worker', () => {
  let worker: UnstableDevWorker;
  let workerEnv: Env;
  let ctx: ExecutionContext;

  beforeAll(async () => {
    worker = await unstable_dev('src/index.ts', {
      experimental: { disableExperimentalWarning: true },
    });
  });

  afterAll(async () => {
    await getMiniflareWaitUntil(ctx);
  });

  beforeEach(() => {
    workerEnv = getMiniflareBindings();
    ctx = new ExecutionContext();
  });

  afterEach(async () => {
    await getMiniflareWaitUntil(ctx);
  });

  it('Worker should be able to boot successfully', () => {
    expect(worker.address).toBeTruthy();
  });

  it('should respond to the ping route by simulating the worker', async () => {
    const response = await worker.fetch('/health');
    expect(response).toBeTruthy();
    expect(response.status).toBe(200);
  });

  it('should respond to the ping route via invoking the app', async () => {
    const req = new Request('http://localhost/health', { method: 'GET' });
    const res = await serverModule.fetch(req, workerEnv, ctx);
    expect(res.status).toBe(200);
  });
});
