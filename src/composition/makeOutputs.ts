import { OutputDefinition } from '../template/OutputDefinition.js';
import { makeOutput } from './makeOutput.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

export function makeOutputs<K extends string = string>(
  spec: Record<K, OutputDefinition>,
): [TemplateBuilder] {
  return [
    TemplateFragment.compose(
      ...Object.entries(spec).map(
        ([k, v]) => makeOutput(k, v as OutputDefinition)[0],
      ),
    ),
  ];
}
