export class Result {
  constructor(
    public before?: string,
    public highlight?: string,
    public after?: string,
    public color?: string
  ) {
    this.before = before ? before : undefined;
    this.highlight = highlight ? highlight : undefined;
    this.after = after ? after : undefined;
    this.color = color ? color : undefined;
  }
}
