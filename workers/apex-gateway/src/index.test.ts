import { unstable_dev } from 'wrangler';
import type { UnstableDevWorker } from 'wrangler';
import { describe, expect, it, beforeAll, afterAll, beforeEach } from 'vitest';
import { graphqlServer } from './index';
import { Env } from '.';

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
    await worker.stop();
  });

  beforeEach(() => {
    workerEnv = getMiniflareBindings();
    ctx = new ExecutionContext();
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
    const res = await graphqlServer.fetch(req, workerEnv, ctx);
    expect(res.status).toBe(200);
  });
});