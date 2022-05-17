import { PolicyEffect } from './PolicyEffect.js';
import { PolicyPrincipal } from './PolicyPrincipal.js';

/**
 * The `Statement` element is the main element for a policy. This element is
 * required. The Statement element can contain a single statement or an array
 * of individual statements. Each individual statement block must be enclosed
 * in curly braces `{ }`. For multiple statements, the array must be enclosed
 * in square brackets `[ ]`.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html | IAM JSON policy elements: Statement}
 */
export interface PolicyStatement {
  /**
   * The `Action` element describes the specific action or actions that will be
   * allowed or denied. Statements must include either an `Action` or
   * `NotAction` element. Each AWS service has its own set of actions that
   * describe tasks that you can perform with that service.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html | IAM JSON policy elements: Action}
   */
  Action: string | string[];

  /**
   * The Condition element (or Condition block) lets you specify conditions for
   * when a policy is in effect. The Condition element is optional. In the
   * Condition element, you build expressions in which you use condition
   * operators (equal, less than, etc.) to match the condition keys and values
   * in the policy against keys and values in the request context.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html | IAM JSON policy elements: Condition}
   */
  Condition?: any;

  /**
   * The `Effect` element is required and specifies whether the statement
   * results in an allow or an explicit deny. Valid values for `Effect` are
   * `Allow` and `Deny`. By default, access to resources is denied. To allow
   * access to a resource, you must set the `Effect` element to `Allow`. To override
   * an allow (for example, to override an allow that is otherwise in force),
   * you set the `Effect` element to `Deny`.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html | IAM JSON policy elements: Effect}
   */
  Effect?: PolicyEffect;

  /**
   * `NotAction` is an advanced policy element that explicitly matches
   * everything except the specified list of actions. Using `NotAction` can
   * result in a shorter policy by listing only a few actions that should not
   * match, rather than including a long list of actions that will match. When
   * using `NotAction`, you should keep in mind that actions specified in this
   * element are the only actions in that are limited. This, in turn, means that
   * all of the applicable actions or services that are not listed are allowed
   * if you use the `Allow` effect. In addition, such unlisted actions or
   * services are denied if you use the `Deny` effect. When you use `NotAction`
   * with the `Resource` element, you provide scope for the policy. This is how
   * AWS determines which actions or services are applicable. For more
   * information, see the following example policy.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html | IAM JSON policy elements: NotAction}
   */
  NotAction?: string | string[];

  /**
   * Use the `NotPrincipal` element to specify the IAM user, federated user, IAM
   * role, AWS account, AWS service, or other principal that is not allowed or
   * denied access to a resource. The `NotPrincipal` element enables you to
   * specify an exception to a list of principals. Use this element to deny
   * access to all principals except the one named in the `NotPrincipal`
   * element.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html | IAM JSON policy elements: NotPrincipal}
   */
  NotPrincipal?: PolicyPrincipal | string;

  /**
   * `NotResource` is an advanced policy element that explicitly matches every
   * resource except those specified. Using `NotResource` can result in a
   * shorter policy by listing only a few resources that should not match,
   * rather than including a long list of resources that will match. This is
   * particularly useful for policies that apply within a single AWS service.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html | IAM JSON policy elements: NotResource}
   */
  NotResource?: string | string[];

  /**
   * Use the `Principal` element in a resource-based JSON policy to specify the
   * principal that is allowed or denied access to a resource.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html | IAM JSON policy elements: Principal}
   */
  Principal?: PolicyPrincipal | string;

  /**
   * The `Resource` element specifies the object or objects that the statement
   * covers. Statements must include either a `Resource` or a `NotResource`
   * element. You specify a resource using an ARN.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html | IAM JSON policy elements: Resource}
   */
  Resource?: string | string[];

  /**
   * You can provide an optional identifier, `Sid` (statement ID) for the policy
   * statement. You can assign a `Sid` value to each statement in a statement
   * array. In services that let you specify an ID element, such as SQS and SNS,
   * the `Sid` value is just a sub-ID of the policy document ID. In IAM, the
   * `Sid` value must be unique within a JSON policy.
   *
   * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html | IAM JSON policy elements: Sid}
   */
  Sid?: string;
}
