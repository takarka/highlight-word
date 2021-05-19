export class Sentence {
  constructor(
    public text?: string,
    public startIndex?: number,
    public endIndex?: number,
    public color?: string
  ) {
    this.text = text ? text : '';
    this.startIndex = startIndex != null ? startIndex : 0;
    this.endIndex = endIndex != null ? endIndex : 0;
    this.color = color ? color : undefined;
  }
}
