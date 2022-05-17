import { Template } from '../template/Template.js';

/**
 * A function which can build one or more resources in a template.
 */
export interface TemplateBuilderFn {
  (template: Template): Template;
}

/**
 * Am object which can build one or more resources in a template.
 */
export interface TemplateBuilder {
  build: TemplateBuilderFn;
}
