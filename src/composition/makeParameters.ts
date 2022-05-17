import { ParameterDefinition } from '../template/ParameterDefinition.js';
import { makeParameter, ParameterAttributes } from './makeParameter.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * A map of names for parameter elements in a CloudFormation template.
 */
export type ParametersAttributes<N extends string> = {
  [K in N]: ParameterAttributes;
};

/**
 * A map of parameter names to definitions.
 */
export type ParametersProps<N extends string> = {
  [K in N]: string | ParameterDefinition;
};

/**
 * Make multiple parameters for a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html | Parameters}
 */
export function makeParameters<N extends string>(
  props: ParametersProps<N>,
): [TemplateBuilder, ParametersAttributes<N>] {
  const builders: TemplateBuilder[] = [];
  const attribs = {} as ParametersAttributes<N>;

  const entries = Object.entries(props) as [
    string,
    string | ParameterDefinition,
  ][];

  for (const [k, v] of entries) {
    const [builder, param] = makeParameter(
      k,
      typeof v === 'string' ? { Type: v } : v,
    );
    builders.push(builder);
    attribs[k as N] = param;
  }

  return [TemplateFragment.compose(...builders), attribs];
}
