import { PolicyDocument, PolicyDocumentVersion } from './PolicyDocument.js';
import { PolicyStatement } from './PolicyStatement.js';

/**
 * Make a {@link PolicyDocument} from a list of statements.
 *
 * @param statements The statements to use for the policy
 */

export function makePolicyDocument(
  ...statements: PolicyStatement[]
): PolicyDocument {
  return {
    Version: PolicyDocumentVersion.Version_2012_10_17,
    Statement: statements,
  };
}
