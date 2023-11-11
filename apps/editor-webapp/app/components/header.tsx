export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center gap-4 px-4">
        <div className="flex items-center overflow-x-auto">
          <p>Outer</p>
          <span> / </span>
          <p>Inner</p>
          <span> / </span>
          <p>More Inner</p>
        </div>
        <div className="flex gap-2 items-center">
          <p>Sup bro</p>
        </div>
      </div>
    </header>
  );
}
