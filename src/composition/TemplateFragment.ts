import { IntrinsicValue } from '../template/Fn.js';
import { OutputDefinition } from '../template/OutputDefinition.js';
import { ParameterDefinition } from '../template/ParameterDefinition.js';
import { ResourceDefinition } from '../template/ResourceDefinition.js';
import { RuleDefinition } from '../template/RuleDefinition.js';
import { Template } from '../template/Template.js';
import { TemplateMap } from '../template/TemplateMap.js';
import { BuilderContext } from './BuilderContext.js';
import { TemplateBuilder, TemplateBuilderFn } from './TemplateBuilder.js';

/**
 * The type comprising all properties in the template with a type of
 * {@link TemplateMap}.
 */
export type TemplateSections = {
  [K in keyof Template]-?: Required<Template>[K] extends TemplateMap<any>
    ? K
    : never;
}[keyof Template];

/**
 * Given a {@link TemplateMap}, return the generic parameter type (i.e.) the
 * value type of the map.
 */
export type TemplateSectionItemType<K extends TemplateSections> =
  Required<Template>[K] extends TemplateMap<infer V> ? V : never;

/**
 * Represents a fragment of a CloudFormation template.
 */
export class TemplateFragment implements TemplateBuilder {
  /**
   * Combine two or more builders to create one {@link TemplateFragment}.
   */
  public static compose(...builders: TemplateBuilder[]): TemplateFragment {
    return new this((template, ctx) =>
      builders.reduce((t, b) => b.build(t, ctx), template),
    );
  }

  /**
   * Create a condition element.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html | Conditions}
   */
  public static condition(
    name: string,
    value: IntrinsicValue,
  ): TemplateFragment {
    return this.section('Conditions', name, value);
  }

  /**
   * Create a mapping element.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html | Mappings}
   */
  public static mapping(
    name: string,
    value: TemplateMap<IntrinsicValue>,
  ): TemplateFragment {
    return this.section('Mappings', name, value);
  }

  /**
   * Create a metadata element.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html | Metadata}
   */
  public static metadata(
    name: string,
    value: IntrinsicValue,
  ): TemplateFragment {
    return this.section('Metadata', name, value);
  }

  /**
   * Create an outuput element.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html | Outputs}
   */
  public static output(
    name: string,
    value: OutputDefinition,
  ): TemplateFragment {
    return this.section('Outputs', name, value);
  }

  /**
   * Create a parameter element.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html | Parameters}
   */
  public static parameter(
    name: string,
    value: ParameterDefinition,
  ): TemplateFragment {
    return this.section('Parameters', name, value);
  }

  /**
   * Create a resource element.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html | Resources}
   */
  public static resource(
    name: string,
    value: ResourceDefinition,
  ): TemplateFragment {
    return this.section('Resources', name, value);
  }

  /**
   * Create a rule element.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/rules-section-structure.html | Rules}
   */
  public static rule(name: string, value: RuleDefinition): TemplateFragment {
    return this.section('Rules', name, value);
  }

  /**
   * Create a named section in a template.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html | Template anatomy}
   */
  public static section<S extends TemplateSections>(
    section: S,
    name: string,
    value: TemplateSectionItemType<S>,
  ): TemplateFragment {
    return new this((template: Template): Template => {
      const current = template[section];
      if (current && this.name in current) {
        throw new Error(
          `Element '${this.name} already exists for template ${section}`,
        );
      }

      return {
        ...template,
        [section]: {
          ...current,
          [name]: value,
        },
      };
    });
  }

  constructor(private readonly _build: TemplateBuilderFn) {}

  /**
   * Build the template.
   */
  public build(template: Template, ctx: BuilderContext): Template {
    return this._build(template, ctx);
  }
}
