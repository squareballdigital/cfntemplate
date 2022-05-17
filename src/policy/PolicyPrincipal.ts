/**
 * You can specify AWS account identifiers in the Principal element of a
 * resource-based policy or in condition keys that support principals. This
 * delegates authority to the account. When you allow access to a different
 * account, an administrator in that account must then grant access to an
 * identity (IAM user or role) in that account. When you specify an AWS account,
 * you can use the account ARN (arn:aws:iam::account-ID:root), or a shortened
 * form that consists of the "AWS" prefix followed by the account ID.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-accounts | AWS account prinicipals}
 */
export interface AwsPrincipal {
  AWS: string | string[];
}

/**
 * An alpha-numeric identifier, that is an obfuscated form of the AWS account
 * ID. You can use this ID to identify an AWS account when granting
 * cross-account access to buckets and objects using Amazon S3. You can retrieve
 * the canonical user ID for your AWS account as either the root user or an IAM
 * user.
 *
 * @see {@link https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId | Canonical user ID}
 */
export interface CanonicalUserPrincipal {
  CanonicalUser: string;
}

/**
 * A web identity session principal is a session principal that results from
 * using the AWS STS `AssumeRoleWithWebIdentity` operation. You can use an
 * external web identity provider (IdP) to sign in, and then assume an IAM role
 * using this operation. This leverages identity federation and issues a role
 * session.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-federated-web-identity | Web identity session principals}
 */
export interface FederatedPrincipal {
  Federated: string;
}

/**
 * You can specify AWS services in the `Principal` element of a resource-based
 * policy or in condition keys that support principals. A service principal is
 * an identifier for a service.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services | AWS service principals}
 */
export interface ServicePrincipal {
  Service: string | string[];
}

/**
 * Use the `Principal` element in a resource-based JSON policy to specify the
 * principal that is allowed or denied access to a resource.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html | IAM JSON policy elements: Principal}
 */
export type PolicyPrincipal =
  | AwsPrincipal
  | CanonicalUserPrincipal
  | FederatedPrincipal
  | ServicePrincipal;
