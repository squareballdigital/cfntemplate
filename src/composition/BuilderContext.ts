export interface ContextConstructor<T> {
  ContextKey: string;
  new (): T;
}

export interface BuilderContext {
  get<T>(ctor: ContextConstructor<T>): T;
}

export class BuilderContextProvider implements BuilderContext {
  private readonly ctx = new Map<string, any>();

  public get<T>(ctor: ContextConstructor<T>): T {
    let value = this.ctx.get(ctor.ContextKey);
    if (!value) {
      value = new ctor();
      this.ctx.set(ctor.ContextKey, value);
    }
    return value;
  }
}
