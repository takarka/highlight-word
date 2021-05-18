export class ValueDTO {
  constructor(public name?: string, public value?: any) {
    this.name = name ? name : undefined;
    this.value = value ? value : undefined;
  }
}
