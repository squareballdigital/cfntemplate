import { PolicyStatement } from './PolicyStatement.js';

/**
 * The `Version` policy element specifies the language syntax rules that are to
 * be used to process a policy.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html | IAM JSON policy elements: Version}
 */
export enum PolicyDocumentVersion {
  /**
   * This was an earlier version of the policy language. You might see this
   * version on older existing policies. Do not use this version for any new
   * policies or when you update any existing policies. Newer features, such as
   * policy variables, will not work with your policy. For example, variables
   * such as `${aws:username}` aren't recognized as variables and are instead
   * treated as literal strings in the policy.
   */
  Version_2008_10_17 = '2008-10-17',

  /**
   * This is the current version of the policy language, and you should always
   * include a Version element and set it to 2012-10-17. Otherwise, you cannot
   * use features such as policy variables that were introduced with this
   * version.
   */
  Version_2012_10_17 = '2012-10-17',
}

/**
 * You manage access in AWS by creating policies and attaching them to IAM
 * identities (users, groups of users, or roles) or AWS resources. A policy is
 * an object in AWS that, when associated with an identity or resource, defines
 * their permissions. AWS evaluates these policies when an IAM principal (user
 * or role) makes a request. Permissions in the policies determine whether the
 * request is allowed or denied. Most policies are stored in AWS as JSON
 * documents. AWS supports six types of policies: identity-based policies,
 * resource-based policies, permissions boundaries, Organizations SCPs, ACLs,
 * and session policies.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html | IAM JSON policy elements reference}
 */
export interface PolicyDocument {
  /**
   * The `Version` policy element specifies the language syntax rules that are
   * to be used to process a policy. To use all of the available policy
   * features, include a `Version` element with a value of `"2012-10-17"`.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html | IAM JSON policy elements: Version}
   */
  Version?: PolicyDocumentVersion;

  /**
   * The `Statement` element is the main element for a policy. This element is
   * required. The Statement element can contain a single statement or an array
   * of individual statements. Each individual statement block must be enclosed
   * in curly braces `{ }`. For multiple statements, the array must be enclosed
   * in square brackets `[ ]`.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html | IAM JSON policy elements: Statement}
   */
  Statement: PolicyStatement[];
}
