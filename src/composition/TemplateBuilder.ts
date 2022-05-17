import { Template } from '../template/Template.js';
import { BuilderContext } from './BuilderContext.js';

/**
 * A function which can build one or more resources in a template.
 */
export interface TemplateBuilderFn {
  (template: Template, ctx: BuilderContext): Template;
}

/**
 * Am object which can build one or more resources in a template.
 */
export interface TemplateBuilder {
  build: TemplateBuilderFn;
}
