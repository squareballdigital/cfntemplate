export interface ContextConstructor<T> {
  new (): T;
}

export interface BuilderContext {
  get<T>(ctor: ContextConstructor<T>): T;
}

export class BuilderContextProvider implements BuilderContext {
  private readonly ctx = new Map<object, any>();

  public get<T>(ctor: ContextConstructor<T>): T {
    let value = this.ctx.get(ctor);
    if (!value) {
      value = new ctor();
      this.ctx.set(ctor, value);
    }
    return value;
  }
}
