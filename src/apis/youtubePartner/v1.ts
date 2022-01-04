// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace youtubePartner_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * YouTube Content ID API
   *
   * The YouTube Content ID API allows the management of YouTube assets along with their associated content, references, ownership, rights and policies.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const youtubePartner = google.youtubePartner('v1');
   * ```
   */
  export class Youtubepartner {
    context: APIRequestContext;
    assetLabels: Resource$Assetlabels;
    assetMatchPolicy: Resource$Assetmatchpolicy;
    assetRelationships: Resource$Assetrelationships;
    assets: Resource$Assets;
    assetSearch: Resource$Assetsearch;
    assetShares: Resource$Assetshares;
    campaigns: Resource$Campaigns;
    claimHistory: Resource$Claimhistory;
    claims: Resource$Claims;
    claimSearch: Resource$Claimsearch;
    contentOwners: Resource$Contentowners;
    liveCuepoints: Resource$Livecuepoints;
    metadataHistory: Resource$Metadatahistory;
    ownership: Resource$Ownership;
    ownershipHistory: Resource$Ownershiphistory;
    package: Resource$Package;
    policies: Resource$Policies;
    referenceConflicts: Resource$Referenceconflicts;
    references: Resource$References;
    spreadsheetTemplate: Resource$Spreadsheettemplate;
    uploader: Resource$Uploader;
    validator: Resource$Validator;
    videoAdvertisingOptions: Resource$Videoadvertisingoptions;
    whitelists: Resource$Whitelists;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.assetLabels = new Resource$Assetlabels(this.context);
      this.assetMatchPolicy = new Resource$Assetmatchpolicy(this.context);
      this.assetRelationships = new Resource$Assetrelationships(this.context);
      this.assets = new Resource$Assets(this.context);
      this.assetSearch = new Resource$Assetsearch(this.context);
      this.assetShares = new Resource$Assetshares(this.context);
      this.campaigns = new Resource$Campaigns(this.context);
      this.claimHistory = new Resource$Claimhistory(this.context);
      this.claims = new Resource$Claims(this.context);
      this.claimSearch = new Resource$Claimsearch(this.context);
      this.contentOwners = new Resource$Contentowners(this.context);
      this.liveCuepoints = new Resource$Livecuepoints(this.context);
      this.metadataHistory = new Resource$Metadatahistory(this.context);
      this.ownership = new Resource$Ownership(this.context);
      this.ownershipHistory = new Resource$Ownershiphistory(this.context);
      this.package = new Resource$Package(this.context);
      this.policies = new Resource$Policies(this.context);
      this.referenceConflicts = new Resource$Referenceconflicts(this.context);
      this.references = new Resource$References(this.context);
      this.spreadsheetTemplate = new Resource$Spreadsheettemplate(this.context);
      this.uploader = new Resource$Uploader(this.context);
      this.validator = new Resource$Validator(this.context);
      this.videoAdvertisingOptions = new Resource$Videoadvertisingoptions(
        this.context
      );
      this.whitelists = new Resource$Whitelists(this.context);
    }
  }

  export interface Schema$AdBreak {
    /**
     * The time of the ad break specified as the number of seconds after the start of the video when the break occurs.
     */
    midrollSeconds?: number | null;
    /**
     * The point at which the break occurs during the video playback.
     */
    position?: string | null;
  }
  export interface Schema$Asset {
    /**
     * A list of asset IDs that can be used to refer to the asset. The list contains values if the asset represents multiple constituent assets that have been merged. In that case, any of the asset IDs originally assigned to the constituent assets could be used to update the master, or synthesized, asset.
     */
    aliasId?: string[] | null;
    /**
     * An ID that YouTube assigns and uses to uniquely identify the asset.
     */
    id?: string | null;
    /**
     * The type of the API resource. For asset resources, the value is youtubePartner#asset.
     */
    kind?: string | null;
    /**
     * A list of asset labels on the asset.
     */
    label?: string[] | null;
    /**
     * The matchPolicy object contains information about the asset's match policy, which YouTube applies to user-uploaded videos that match the asset.
     */
    matchPolicy?: Schema$AssetMatchPolicy;
    matchPolicyEffective?: Schema$AssetMatchPolicy;
    matchPolicyMine?: Schema$AssetMatchPolicy;
    /**
     * The metadata object contains information that identifies and describes the asset. This information could be used to search for the asset or to eliminate duplication within YouTube's database.
     */
    metadata?: Schema$Metadata;
    metadataEffective?: Schema$Metadata;
    metadataMine?: Schema$Metadata;
    /**
     * The ownership object identifies an asset's owners and provides additional details about their ownership, such as the territories where they own the asset.
     */
    ownership?: Schema$RightsOwnership;
    /**
     * The ownershipConflicts object contains information about the asset's ownership conflicts.
     */
    ownershipConflicts?: Schema$OwnershipConflicts;
    ownershipEffective?: Schema$RightsOwnership;
    ownershipMine?: Schema$RightsOwnership;
    /**
     * The asset's status.
     */
    status?: string | null;
    /**
     * The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
     */
    timeCreated?: string | null;
    /**
     * The asset's type. This value determines the metadata fields that you can set for the asset. In addition, certain API functions may only be supported for specific types of assets. For example, composition assets may have more complex ownership data than other types of assets.
     */
    type?: string | null;
  }
  export interface Schema$AssetLabel {
    /**
     * The type of the API resource. For assetLabel resources, this value is youtubePartner#assetLabel.
     */
    kind?: string | null;
    /**
     * Name of the asset label.
     */
    labelName?: string | null;
  }
  export interface Schema$AssetLabelListResponse {
    /**
     * A list of assetLabel resources that match the request criteria.
     */
    items?: Schema$AssetLabel[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#assetLabelList.
     */
    kind?: string | null;
  }
  export interface Schema$AssetListResponse {
    /**
     * A list of asset resources that match the request criteria.
     */
    items?: Schema$Asset[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#assetList.
     */
    kind?: string | null;
  }
  export interface Schema$AssetMatchPolicy {
    /**
     * The type of the API resource. Value: youtubePartner#assetMatchPolicy.
     */
    kind?: string | null;
    /**
     * A value that uniquely identifies the Policy resource that YouTube applies to user-uploaded videos that match the asset.
     */
    policyId?: string | null;
    /**
     * A list of rules that collectively define the policy that the content owner wants to apply to user-uploaded videos that match the asset. Each rule specifies the action that YouTube should take and may optionally specify the conditions under which that action is enforced.
     */
    rules?: Schema$PolicyRule[];
  }
  export interface Schema$AssetRelationship {
    /**
     * The ID of the child (contained) asset.
     */
    childAssetId?: string | null;
    /**
     * A value that YouTube assigns and uses to uniquely identify the asset relationship.
     */
    id?: string | null;
    /**
     * The type of the API resource. For this resource, the value is youtubePartner#assetRelationship.
     */
    kind?: string | null;
    /**
     * The ID of the parent (containing) asset.
     */
    parentAssetId?: string | null;
  }
  export interface Schema$AssetRelationshipListResponse {
    /**
     * A list of assetRelationship resources that match the request criteria.
     */
    items?: Schema$AssetRelationship[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#assetRelationshipList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
  }
  export interface Schema$AssetSearchResponse {
    /**
     * A list of asset resources that match the request criteria.
     */
    items?: Schema$AssetSnippet[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#assetSnippetList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
  }
  export interface Schema$AssetShare {
    /**
     * The type of the API resource. For this resource, the value is youtubePartner#assetShare.
     */
    kind?: string | null;
    /**
     * A value that YouTube assigns and uses to uniquely identify the asset share.
     */
    shareId?: string | null;
    /**
     * A value that YouTube assigns and uses to uniquely identify the asset view.
     */
    viewId?: string | null;
  }
  export interface Schema$AssetShareListResponse {
    /**
     * An assetShare resource that matches the request criteria.
     */
    items?: Schema$AssetShare[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#assetShareList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
  }
  export interface Schema$AssetSnippet {
    /**
     * Custom ID assigned by the content owner to this asset.
     */
    customId?: string | null;
    /**
     * An ID that YouTube assigns and uses to uniquely identify the asset.
     */
    id?: string | null;
    /**
     * The ISRC (International Standard Recording Code) for this asset.
     */
    isrc?: string | null;
    /**
     * The ISWC (International Standard Musical Work Code) for this asset.
     */
    iswc?: string | null;
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#assetSnippet.
     */
    kind?: string | null;
    /**
     * The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
     */
    timeCreated?: string | null;
    /**
     * Title of this asset.
     */
    title?: string | null;
    /**
     * The asset's type. This value determines which metadata fields might be included in the metadata object.
     */
    type?: string | null;
  }
  /**
   * Information to read/write to blobstore2.
   */
  export interface Schema$Blobstore2Info {
    /**
     * The blob generation id.
     */
    blobGeneration?: string | null;
    /**
     * The blob id, e.g., /blobstore/prod/playground/scotty
     */
    blobId?: string | null;
    /**
     * Read handle passed from Bigstore -\> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads.
     */
    downloadReadHandle?: string | null;
    /**
     * The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call.
     */
    readToken?: string | null;
    /**
     * Metadata passed from Blobstore -\> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads.
     */
    uploadMetadataContainer?: string | null;
  }
  export interface Schema$Campaign {
    /**
     * The campaignData object contains details like the campaign's start and end dates, target and source.
     */
    campaignData?: Schema$CampaignData;
    /**
     * The unique ID that YouTube uses to identify the campaign.
     */
    id?: string | null;
    /**
     * The type of the API resource. For campaign resources, this value is youtubePartner#campaign.
     */
    kind?: string | null;
    /**
     * The status of the campaign.
     */
    status?: string | null;
    /**
     * The time the campaign was created.
     */
    timeCreated?: string | null;
    /**
     * The time the campaign was last modified.
     */
    timeLastModified?: string | null;
  }
  export interface Schema$CampaignData {
    /**
     * The campaignSource object contains information about the assets for which the campaign will generate links.
     */
    campaignSource?: Schema$CampaignSource;
    /**
     * The time at which the campaign should expire. Do not specify a value if the campaign has no expiration time.
     */
    expireTime?: string | null;
    /**
     * The user-given name of the campaign.
     */
    name?: string | null;
    /**
     * A list of videos or channels that will be linked to from claimed videos that are included in the campaign.
     */
    promotedContent?: Schema$PromotedContent[];
    /**
     * The time at which the campaign should start. Do not specify a value if the campaign should start immediately.
     */
    startTime?: string | null;
  }
  export interface Schema$CampaignList {
    /**
     * A list of campaigns.
     */
    items?: Schema$Campaign[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#campaignList.
     */
    kind?: string | null;
  }
  export interface Schema$CampaignSource {
    /**
     * The type of the campaign source.
     */
    sourceType?: string | null;
    /**
     * A list of values of the campaign source.
     */
    sourceValue?: string[] | null;
  }
  export interface Schema$CampaignTargetLink {
    /**
     * The channel ID or video ID of the link target.
     */
    targetId?: string | null;
    /**
     * Indicates whether the link target is a channel or video.
     */
    targetType?: string | null;
  }
  export interface Schema$Claim {
    /**
     * The applied policy for the viewing owner on the claim. This might not be the same as the final claim policy on the video as it does not consider other partners' policy of the same claim.
     */
    appliedPolicy?: Schema$Policy;
    /**
     * The unique YouTube asset ID that identifies the asset associated with the claim.
     */
    assetId?: string | null;
    /**
     * Indicates whether or not the claimed video should be blocked anywhere it is not explicitly owned.
     */
    blockOutsideOwnership?: boolean | null;
    /**
     * This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
     */
    contentType?: string | null;
    /**
     * The ID that YouTube assigns and uses to uniquely identify the claim.
     */
    id?: string | null;
    /**
     * Indicates whether or not the claim is a partner uploaded claim.
     */
    isPartnerUploaded?: boolean | null;
    /**
     * The type of the API resource. For claim resources, this value is youtubePartner#claim.
     */
    kind?: string | null;
    /**
     * If this claim was auto-generated based on a provided reference, this section will provide details of the match that generated the claim.
     */
    matchInfo?: Schema$MatchInfo;
    origin?: Schema$Origin;
    /**
     * The policy provided by the viewing owner on the claim.
     */
    policy?: Schema$Policy;
    /**
     * The claim's status. When updating a claim, you can update its status from active to inactive to effectively release the claim, but the API does not support other updates to a claim's status.
     */
    status?: string | null;
    /**
     * Contains URLs linking back to claim-related pages in Studio.
     */
    studioInfo?: Schema$StudioInfo;
    /**
     * The time the claim was created.
     */
    timeCreated?: string | null;
    /**
     * UGC type of the claim (standard, premium, song).
     */
    ugcType?: string | null;
    /**
     * The unique YouTube video ID that identifies the video associated with the claim.
     */
    videoId?: string | null;
  }
  export interface Schema$ClaimEvent {
    /**
     * The type of the API resource. For claimEvent resources, this value is youtubePartner#claimEvent.
     */
    kind?: string | null;
    /**
     * Reason of the event.
     */
    reason?: string | null;
    /**
     * Data related to source of the event.
     */
    source?: Schema$Source;
    /**
     * The time when the event occurred.
     */
    time?: string | null;
    /**
     * Type of the event.
     */
    type?: string | null;
    /**
     * Details of event's type.
     */
    typeDetails?: Schema$TypeDetails;
  }
  export interface Schema$ClaimHistory {
    /**
     * A list of claim history events.
     */
    event?: Schema$ClaimEvent[];
    /**
     * The ID that YouTube assigns and uses to uniquely identify the claim.
     */
    id?: string | null;
    /**
     * The type of the API resource. For claimHistory resources, this value is youtubePartner#claimHistory.
     */
    kind?: string | null;
    /**
     * The external channel id of claimed video's uploader.
     */
    uploaderChannelId?: string | null;
  }
  export interface Schema$ClaimListResponse {
    /**
     * A list of claims that match the request criteria.
     */
    items?: Schema$Claim[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#claimList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    previousPageToken?: string | null;
  }
  export interface Schema$ClaimSearchResponse {
    /**
     * A list of claims that match the request criteria.
     */
    items?: Schema$ClaimSnippet[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#claimSnippetList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    previousPageToken?: string | null;
  }
  export interface Schema$ClaimSnippet {
    /**
     * The unique YouTube asset ID that identifies the asset associated with the claim.
     */
    assetId?: string | null;
    /**
     * This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
     */
    contentType?: string | null;
    /**
     * The ID that YouTube assigns and uses to uniquely identify the claim.
     */
    id?: string | null;
    /**
     * Indicates whether or not the claim is a partner uploaded claim.
     */
    isPartnerUploaded?: boolean | null;
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#claimSnippet.
     */
    kind?: string | null;
    origin?: Schema$YoutubePartnerApiProtoFrontendV1Origin;
    /**
     * The claim's status.
     */
    status?: string | null;
    /**
     * Contains URLs linking back to claim-related pages in Studio.
     */
    studioInfo?: Schema$StudioInfo;
    /**
     * Indicates that this is a third party claim.
     */
    thirdPartyClaim?: boolean | null;
    /**
     * The time the claim was created.
     */
    timeCreated?: string | null;
    /**
     * The time the claim status and/or status detail was last modified.
     */
    timeStatusLastModified?: string | null;
    /**
     * The unique YouTube video ID that identifies the video associated with the claim.
     */
    videoId?: string | null;
    /**
     * The title of the claimed video.
     */
    videoTitle?: string | null;
    /**
     * Number of views for the claimed video.
     */
    videoViews?: string | null;
  }
  /**
   * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
   */
  export interface Schema$CompositeMedia {
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string | null;
    /**
     * Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string | null;
    /**
     * crc32.c hash for the payload.
     */
    crc32cHash?: number | null;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string | null;
    /**
     * Size of the data, in bytes
     */
    length?: string | null;
    /**
     * MD5 hash for the payload.
     */
    md5Hash?: string | null;
    /**
     * Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
     */
    objectId?: Schema$ObjectId;
    /**
     * Path to the data, set if reference_type is PATH
     */
    path?: string | null;
    /**
     * Describes what the field reference contains.
     */
    referenceType?: string | null;
    /**
     * SHA-1 hash for the payload.
     */
    sha1Hash?: string | null;
  }
  export interface Schema$Conditions {
    /**
     * This match condition specifies whether the user- or partner-uploaded content needs to match the audio, video or audiovisual content of a reference file for the rule to apply.
     */
    contentMatchType?: string[] | null;
    /**
     * This match condition specifies an amount of time that the user- or partner- uploaded content needs to match a reference file for the rule to apply.
     */
    matchDuration?: Schema$IntervalCondition[];
    /**
     * This match condition specifies a percentage of the user- or partner-uploaded content that needs to match a reference file for the rule to apply.
     */
    matchPercent?: Schema$IntervalCondition[];
    /**
     * This match condition indicates that the reference must be a certain duration for the rule to apply.
     */
    referenceDuration?: Schema$IntervalCondition[];
    /**
     * This match condition indicates that the specified percentage of a reference file must match the user- or partner-uploaded content for the rule to apply.
     */
    referencePercent?: Schema$IntervalCondition[];
    /**
     * This watch condition specifies where users are (or or not) allowed to watch (or listen to) an asset. YouTube determines whether the condition is satisfied based on the user's location.
     */
    requiredTerritories?: Schema$TerritoryCondition;
  }
  export interface Schema$ConflictingOwnership {
    /**
     * The ID of the conflicting asset's owner.
     */
    owner?: string | null;
    /**
     * The percentage of the asset that the owner controls or administers.
     */
    ratio?: number | null;
  }
  export interface Schema$ContentOwner {
    /**
     * The email address visible to other partners for use in managing asset ownership conflicts.
     */
    conflictNotificationEmail?: string | null;
    /**
     * The content owner's display name.
     */
    displayName?: string | null;
    /**
     * The email address(es) to which YouTube sends claim dispute notifications and possible claim notifications.
     */
    disputeNotificationEmails?: string[] | null;
    /**
     * The email address(es) to which YouTube sends fingerprint reports.
     */
    fingerprintReportNotificationEmails?: string[] | null;
    /**
     * A unique ID that YouTube uses to identify the content owner.
     */
    id?: string | null;
    /**
     * The type of the API resource. For content owner resources, the value is youtubePartner#contentOwner.
     */
    kind?: string | null;
    /**
     * The email address(es) to which YouTube sends CMS account details and report notifications.
     */
    primaryNotificationEmails?: string[] | null;
  }
  export interface Schema$ContentOwnerListResponse {
    /**
     * A list of content owners that match the request criteria.
     */
    items?: Schema$ContentOwner[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#contentOwnerList.
     */
    kind?: string | null;
  }
  /**
   * Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.
   */
  export interface Schema$ContentTypeInfo {
    /**
     * Scotty's best guess of what the content type of the file is.
     */
    bestGuess?: string | null;
    /**
     * The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file.
     */
    fromBytes?: string | null;
    /**
     * The content type of the file derived from the file extension of the original file name used by the client.
     */
    fromFileName?: string | null;
    /**
     * The content type of the file as specified in the request headers, multipart headers, or RUPIO start request.
     */
    fromHeader?: string | null;
    /**
     * The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API).
     */
    fromUrlPath?: string | null;
  }
  export interface Schema$CountriesRestriction {
    /**
     * A list of ad formats that can be used in the specified countries.
     */
    adFormats?: string[] | null;
    /**
     * A list of ISO 3166-1 alpha-2 country codes that identify the countries where ads are enabled.
     */
    territories?: string[] | null;
  }
  export interface Schema$CuepointSettings {
    /**
     * The cuepoint's type. See the Getting started guide for an explanation of the different types of cuepoints. Also see the Life of a broadcast document for best practices about inserting cuepoints during your broadcast.
     */
    cueType?: string | null;
    /**
     * The cuepoint's duration, in seconds. This value must be specified if the cueType is ad and is ignored otherwise.
     */
    durationSecs?: number | null;
    /**
     * This value specifies a point in time in the video when viewers should see an ad or in-stream slate. The property value identifies a time offset, in milliseconds, from the beginning of the monitor stream. Though measured in milliseconds, the value is actually an approximation, and YouTube will insert the cuepoint as closely as possible to that time. You should not specify a value for this parameter if your broadcast does not have a monitor stream. This property's default value is 0, which indicates that the cuepoint should be inserted as soon as possible. If your broadcast stream is not delayed, then 0 is also the only valid value. However, if your broadcast stream is delayed, then the property value can specify the time when the cuepoint should be inserted. See the Getting started guide for more details. *Note:* If your broadcast had a testing phase, the offset is measured from the time that the testing phase began.
     */
    offsetTimeMs?: string | null;
    /**
     * This value specifies the wall clock time at which the cuepoint should be inserted. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
     */
    walltime?: string | null;
  }
  export interface Schema$Date {
    /**
     * The date's day. The value should be an integer between 1 and 31. Note that some day-month combinations are not valid.
     */
    day?: number | null;
    /**
     * The date's month. The value should be an integer between 1 and 12.
     */
    month?: number | null;
    /**
     * The date's year in the Gregorian Calendar. Assumed to be A.D.
     */
    year?: number | null;
  }
  /**
   * Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffChecksumsResponse {
    /**
     * Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol.
     */
    checksumsLocation?: Schema$CompositeMedia;
    /**
     * The chunk size of checksums. Must be a multiple of 256KB.
     */
    chunkSizeBytes?: string | null;
    /**
     * If set, calculate the checksums based on the contents and return them to the caller.
     */
    objectLocation?: Schema$CompositeMedia;
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string | null;
    /**
     * The object version of the object the checksums are being returned for.
     */
    objectVersion?: string | null;
  }
  /**
   * Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffDownloadResponse {
    /**
     * The original object location.
     */
    objectLocation?: Schema$CompositeMedia;
  }
  /**
   * A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffUploadRequest {
    /**
     * The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol.
     */
    checksumsInfo?: Schema$CompositeMedia;
    /**
     * The location of the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received.
     */
    objectInfo?: Schema$CompositeMedia;
    /**
     * The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in.
     */
    objectVersion?: string | null;
  }
  /**
   * Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffUploadResponse {
    /**
     * The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload.
     */
    objectVersion?: string | null;
    /**
     * The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification.
     */
    originalObject?: Schema$CompositeMedia;
  }
  /**
   * Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffVersionResponse {
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string | null;
    /**
     * The version of the object stored at the server.
     */
    objectVersion?: string | null;
  }
  /**
   * Parameters specific to media downloads.
   */
  export interface Schema$DownloadParameters {
    /**
     * A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client.
     */
    allowGzipCompression?: boolean | null;
    /**
     * Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty.
     */
    ignoreRange?: boolean | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  export interface Schema$ExcludedInterval {
    /**
     * The end (inclusive) time in seconds of the time window. The value can be any value greater than low. If high is greater than the length of the reference, the interval between low and the end of the reference will be excluded. Every interval must specify a value for this field.
     */
    high?: number | null;
    /**
     * The start (inclusive) time in seconds of the time window. The value can be any value between 0 and high. Every interval must specify a value for this field.
     */
    low?: number | null;
    /**
     * The source of the request to exclude the interval from Content ID matching.
     */
    origin?: string | null;
    /**
     * The date and time that the exclusion was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
     */
    timeCreated?: string | null;
  }
  export interface Schema$IntervalCondition {
    /**
     * The maximum (inclusive) allowed value for the condition to be satisfied. The default value is ∞.
     */
    high?: number | null;
    /**
     * The minimum (inclusive) allowed value for the condition to be satisfied. The default value is -∞.
     */
    low?: number | null;
  }
  export interface Schema$LiveCuepoint {
    /**
     * The ID that YouTube assigns to uniquely identify the broadcast into which the cuepoint is being inserted.
     */
    broadcastId?: string | null;
    /**
     * A value that YouTube assigns to uniquely identify the cuepoint.
     */
    id?: string | null;
    /**
     * The type of the API resource. For liveCuepoint resources, the value is youtubePartner#liveCuepoint.
     */
    kind?: string | null;
    /**
     * The *settings* object defines the cuepoint's settings.
     */
    settings?: Schema$CuepointSettings;
  }
  export interface Schema$LongestMatch {
    /**
     * The duration of the longest match between the reference and the user video.
     */
    durationSecs?: string | null;
    /**
     * The offset in seconds into the reference at which the longest match began.
     */
    referenceOffset?: string | null;
    /**
     * The offset in seconds into the user video at which the longest match began.
     */
    userVideoOffset?: string | null;
  }
  export interface Schema$MatchInfo {
    /**
     * Details of the longest match between the reference and the user video.
     */
    longestMatch?: Schema$LongestMatch;
    /**
     * Details about each match segment. Each item in the list contains information about one match segment associated with the claim. It is possible to have multiple match segments. For example, if the audio and video content of an uploaded video match that of a reference video, there would be two match segments. One segment would describe the audio match and the other would describe the video match.
     */
    matchSegments?: Schema$MatchSegment[];
    /**
     * The reference ID that generated this match.
     */
    referenceId?: string | null;
    /**
     * Details of the total amount of reference and user video content which matched each other. Note these two values may differ if either the reference or the user video contains a loop.
     */
    totalMatch?: Schema$TotalMatch;
  }
  export interface Schema$MatchSegment {
    /**
     * Identifies the manner in which the claimed video matches the reference video.
     */
    channel?: string | null;
    /**
     * On insert operation of manual claims, the manual_segment object contains information about the specific portion of the video that is claimed to be matching.
     */
    manual_segment?: Schema$Segment2;
    /**
     * The reference_segment object contains information about the matched portion of the reference content.
     */
    reference_segment?: Schema$Segment;
    /**
     * The video_segment object contains information about the matched portion of the claimed video.
     */
    video_segment?: Schema$Segment;
  }
  /**
   * A reference to data stored on the filesystem, on GFS or in blobstore.
   */
  export interface Schema$Media {
    /**
     * Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time.
     */
    algorithm?: string | null;
    /**
     * Use object_id instead.
     */
    bigstoreObjectRef?: string | null;
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string | null;
    /**
     * Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified.
     */
    compositeMedia?: Schema$CompositeMedia[];
    /**
     * MIME type of the data
     */
    contentType?: string | null;
    /**
     * Extended content type information provided for Scotty uploads.
     */
    contentTypeInfo?: Schema$ContentTypeInfo;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string | null;
    /**
     * For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.
     */
    crc32cHash?: number | null;
    /**
     * Set if reference_type is DIFF_CHECKSUMS_RESPONSE.
     */
    diffChecksumsResponse?: Schema$DiffChecksumsResponse;
    /**
     * Set if reference_type is DIFF_DOWNLOAD_RESPONSE.
     */
    diffDownloadResponse?: Schema$DiffDownloadResponse;
    /**
     * Set if reference_type is DIFF_UPLOAD_REQUEST.
     */
    diffUploadRequest?: Schema$DiffUploadRequest;
    /**
     * Set if reference_type is DIFF_UPLOAD_RESPONSE.
     */
    diffUploadResponse?: Schema$DiffUploadResponse;
    /**
     * Set if reference_type is DIFF_VERSION_RESPONSE.
     */
    diffVersionResponse?: Schema$DiffVersionResponse;
    /**
     * Parameters for a media download.
     */
    downloadParameters?: Schema$DownloadParameters;
    /**
     * Original file name
     */
    filename?: string | null;
    /**
     * Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media.
     */
    hash?: string | null;
    /**
     * For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification.
     */
    hashVerified?: boolean | null;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string | null;
    /**
     * |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence.
     */
    isPotentialRetry?: boolean | null;
    /**
     * Size of the data, in bytes
     */
    length?: string | null;
    /**
     * Scotty-provided MD5 hash for an upload.
     */
    md5Hash?: string | null;
    /**
     * Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA.
     */
    mediaId?: string | null;
    /**
     * Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
     */
    objectId?: Schema$ObjectId;
    /**
     * Path to the data, set if reference_type is PATH
     */
    path?: string | null;
    /**
     * Describes what the field reference contains.
     */
    referenceType?: string | null;
    /**
     * Scotty-provided SHA1 hash for an upload.
     */
    sha1Hash?: string | null;
    /**
     * Scotty-provided SHA256 hash for an upload.
     */
    sha256Hash?: string | null;
    /**
     * Time at which the media data was last updated, in milliseconds since UNIX epoch
     */
    timestamp?: string | null;
    /**
     * A unique fingerprint/version id for the media data
     */
    token?: string | null;
  }
  /**
   * Extra information added to operations that support Scotty media requests.
   */
  export interface Schema$MediaRequestInfo {
    /**
     * The number of current bytes uploaded or downloaded.
     */
    currentBytes?: string | null;
    /**
     * Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications.
     */
    customData?: string | null;
    /**
     * Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information.
     */
    diffObjectVersion?: string | null;
    /**
     * The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929
     */
    finalStatus?: number | null;
    /**
     * The type of notification received from Scotty.
     */
    notificationType?: string | null;
    /**
     * The Scotty request ID.
     */
    requestId?: string | null;
    /**
     * The total size of the file.
     */
    totalBytes?: string | null;
    /**
     * Whether the total bytes field contains an estimated data.
     */
    totalBytesIsEstimated?: boolean | null;
  }
  /**
   * This message is for backends to pass their scotty media specific fields to ESF. Backend will include this in their response message to ESF. Example: ExportFile is an rpc defined for upload using scotty from ESF. rpc ExportFile(ExportFileRequest) returns (ExportFileResponse) Message ExportFileResponse will include apiserving.MediaResponseInfo to tell ESF about data like dynamic_dropzone it needs to pass to Scotty. message ExportFileResponse { optional gdata.Media blob = 1; optional apiserving.MediaResponseInfo media_response_info = 2 \}
   */
  export interface Schema$MediaResponseInfo {
    /**
     * Data to copy from backend response to the next backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications.
     */
    customData?: string | null;
    /**
     * Specifies any transformation to be applied to data before persisting it or retrieving from storage. E.g., encryption options for blobstore2. This should be of the form uploader_service.DataStorageTransform.
     */
    dataStorageTransform?: string | null;
    /**
     * Specifies the Scotty Drop Target to use for uploads. If present in a media response, Scotty does not upload to a standard drop zone. Instead, Scotty saves the upload directly to the location specified in this drop target. Unlike drop zones, the drop target is the final storage location for an upload. So, the agent does not need to clone the blob at the end of the upload. The agent is responsible for garbage collecting any orphaned blobs that may occur due to aborted uploads. For more information, see the drop target design doc here: http://goto/ScottyDropTarget This field will be preferred to dynamicDropzone. If provided, the identified field in the response must be of the type uploader.agent.DropTarget.
     */
    dynamicDropTarget?: string | null;
    /**
     * Specifies the Scotty dropzone to use for uploads.
     */
    dynamicDropzone?: string | null;
    /**
     * Diff Updates must respond to a START notification with this Media proto to tell Scotty to decode the diff encoded payload and apply the diff against this field. If the request was diff encoded, but this field is not set, Scotty will treat the encoding as identity. This is corresponding to Apiary's DiffUploadResponse.original_object (//depot/google3/gdata/rosy/proto/data.proto?l=413). See go/esf-scotty-diff-upload for more information.
     */
    mediaForDiff?: Schema$Media;
    /**
     * Request class to use for all Blobstore operations for this request.
     */
    requestClass?: string | null;
    /**
     * Requester ID passed along to be recorded in the Scotty logs
     */
    scottyAgentUserId?: string | null;
    /**
     * Customer-specific data to be recorded in the Scotty logs type is logs_proto_scotty.CustomerLog
     */
    scottyCustomerLog?: string | null;
    /**
     * Specifies the TrafficClass that Scotty should use for any RPCs to fetch the response bytes. Will override the traffic class GTOS of the incoming http request. This is a temporary field to facilitate whitelisting and experimentation by the bigstore agent only. For instance, this does not apply to RTMP reads. WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.
     */
    trafficClassField?: string | null;
    /**
     * Tells Scotty to verify hashes on the agent's behalf by parsing out the X-Goog-Hash header.
     */
    verifyHashFromHeader?: boolean | null;
  }
  export interface Schema$Metadata {
    /**
     * A list that identifies actors associated with the asset. You can specify up to 50 actors for an asset.
     */
    actor?: string[] | null;
    /**
     * The album on which a sound recording asset is included. This field is only valid for sound recording assets and has a maximum length of 255 bytes.
     */
    album?: string | null;
    /**
     * The artist associated with a music video or sound recording asset. This field is only valid for music video and sound recording assets. It is required for sound recordings included in the AudioSwap program.
     */
    artist?: string[] | null;
    /**
     * Identifies the network or channel that originally broadcast a show or a season of a show. This field should only be included for an asset if the broadcaster associated with the asset is different from the partner uploading the asset to YouTube. Note that a show may have multiple broadcasters; for example, a show may switch networks between seasons.
     */
    broadcaster?: string[] | null;
    /**
     * Category of this asset.
     */
    category?: string | null;
    /**
     * The type of video content that the asset represents. This field is only valid for movie and episode assets, and is required for the following types of those assets: - Episode assets that are linked to a show - Movie assets that appear in YouTube's Movies category
     */
    contentType?: string | null;
    /**
     * The date copyright for this asset was established. *
     */
    copyrightDate?: Schema$Date;
    /**
     * A unique value that you, the metadata provider, use to identify an asset. The value could be a unique ID that you created for the asset or a standard identifier, such as an ISRC. The value has a maximum length of 64 bytes and may contain alphanumeric characters, hyphens (-), underscores (_), periods ( .), "at" symbols (@), or forward slashes (/).
     */
    customId?: string | null;
    /**
     * A description of the asset. The description may be displayed on YouTube or in CMS. This field has a maximum length of 5,000 bytes.
     */
    description?: string | null;
    /**
     * A list that identifies directors associated with the asset. You can specify up to 50 directors for an asset.
     */
    director?: string[] | null;
    /**
     * The Entertainment Identifier Registry (EIDR) assigned to an asset. This value is only used for episode and movie assets and is optional in both cases. The value contains a standard prefix for EIDR registry, followed by a forward slash, a 20-character hexadecimal string, and an alphanumeric (0-9A-Z) check character.
     */
    eidr?: string | null;
    /**
     * The last year that a television show aired. This value is only used for show assets, for which it is optional. Do not specify a value if new show episodes are still being created.
     */
    endYear?: number | null;
    /**
     * The episode number associated with an episode asset. This field is required for and only used for episode assets that are linked to show assets. It has a maximum length of 5 bytes.
     */
    episodeNumber?: string | null;
    /**
     * This value indicates that the episodes associated with a particular show asset or a particular season asset are untitled. An untitled show (or season) has episodes which are identified by their episode number or date. If this field is set to true, then YouTube will optimize the title displayed for associated episodes.
     */
    episodesAreUntitled?: boolean | null;
    /**
     * This field specifies a genre that can be used to categorize an asset. Assets may be categorized in more than one genre, and YouTube uses different sets of genres to categorize different types of assets. For example, Soaps might be a valid genre for a show but not for a movie or sound recording. - Show assets - Movie assets that appear in YouTube's Movies category - Sound recordings included in the AudioSwap program
     */
    genre?: string[] | null;
    /**
     * The GRID (Global Release Identifier) of a music video or sound recording. This field's value must contain exactly 18 alphanumeric characters.
     */
    grid?: string | null;
    /**
     * The six-character Harry Fox Agency (HFA) song code issued to uniquely identify a composition. This value is only valid for composition assets.
     */
    hfa?: string | null;
    /**
     * An official URL associated with the asset. This field has a maximum length of 1536 bytes. Please do not submit a 1537-byte URL. Your efforts would be futile.
     */
    infoUrl?: string | null;
    /**
     * The ISAN (International Standard Audiovisual Number) for the asset. This value is only used for episode and movie assets and is optional in both cases. The value contains 26 characters, which includes the 24 hexadecimal characters of the ISAN as well as two check characters, in the following format: - The first 16 characters in the tag value contain hexadecimal characters specifying the 'root' and 'episode' components of the ISAN. - The seventeenth character is a check character (a letter from A-Z). - Characters 18 to 25 are the remaining eight characters of the ISAN, which specify the 'version' component of the ISAN. - The twenty-sixth character is another check character (A-Z).
     */
    isan?: string | null;
    /**
     * The ISRC (International Standard Recording Code) of a music video or sound recording asset. This field's value must contain exactly 12 alphanumeric characters.
     */
    isrc?: string | null;
    /**
     * The ISWC (International Standard Musical Work Code) for a composition asset. The field's value must contain exactly 11 characters in the format of a letter (T) followed by 10 digits.
     */
    iswc?: string | null;
    /**
     * A list of up to 100 keywords associated with a show asset. This field is required for and also only used for show assets.
     */
    keyword?: string[] | null;
    /**
     * The record label that released a sound recording asset. This field is only valid for sound recording assets and has a maximum length of 255 bytes.
     */
    label?: string | null;
    /**
     * Additional information that does not map directly to one of the other metadata fields. This field has a maximum length of 255 bytes.
     */
    notes?: string | null;
    /**
     * The method by which people first had the opportunity to see a video asset. This value is only used for episode and movie assets. It is required for the assets listed below and otherwise optional: - Episode assets that are linked to a show - Movie assets that appear in YouTube's Movies category
     */
    originalReleaseMedium?: string | null;
    /**
     * A list that identifies producers of the asset. You can specify up to 50 producers for an asset.
     */
    producer?: string[] | null;
    /**
     * A list of ratings that an asset received. The rating must be valid under the specified rating system.
     */
    ratings?: Schema$Rating[];
    /**
     * The date that an asset was publicly released. For season assets, this value specifies the first date that the season aired. Dates prior to the year 1902 are not supported. This value is valid for episode, season, movie, music video, and sound recording assets. It is required for the assets listed below and otherwise optional: - Episode assets that are linked to a show - Movie assets that appear in YouTube's Movies category
     */
    releaseDate?: Schema$Date;
    /**
     * The season number that identifies a season asset, or the season number that is associated with an episode asset. This field has a maximum length of 5 bytes.
     */
    seasonNumber?: string | null;
    /**
     * The customId of the show asset that a season or episode asset is associated with. It is required for season and episode assets that appear in the Shows category on YouTube, and it is not valid for other types of assets. This field has a maximum length of 64 bytes and may contain alphanumeric characters, hyphens (-), underscores (_), periods (.), "at" symbols (@), or forward slashes (/).
     */
    showCustomId?: string | null;
    /**
     * The name of the show that an episode asset is associated with. *Note:* This tag is only used for and valid for episodes that are not associated with show assets and enables those assets to still display a show title in the asset metadata section of CMS. This field has a maximum length of 120 bytes.
     */
    showTitle?: string | null;
    /**
     * The video's primary spoken language. The value can be any ISO 639-1 two-letter language code. This value is only used for episode and movie assets and is not valid for other types of assets.
     */
    spokenLanguage?: string | null;
    /**
     * The first year that a television show aired. This value is required for and also only used for show assets.
     */
    startYear?: number | null;
    /**
     * A list of languages for which the video has either a separate caption track or burnt-in captions that are part of the video. Each value in the list should be an ISO 639-1 two-letter language code. This value is only used for episode and movie assets and is not valid for other types of assets.
     */
    subtitledLanguage?: string[] | null;
    /**
     * The asset's title or name. The value has a maximum length of 255 bytes. This value is required for the assets listed below and optional for all other assets: - Show assets - Episode assets that are linked to a show - Movie assets that appear in YouTube's Movies category - Sound recordings included in the AudioSwap program
     */
    title?: string | null;
    /**
     * TMS (Tribune Media Systems) ID for the asset.
     */
    tmsId?: string | null;
    /**
     * Specifies the total number of full-length episodes in the season. This value is used only for season assets.
     */
    totalEpisodesExpected?: number | null;
    /**
     * The UPC (Universal Product Code) associated with the asset.
     */
    upc?: string | null;
    /**
     * A list that identifies writers associated with the asset. You can specify up to 50 writers for an asset.
     */
    writer?: string[] | null;
  }
  export interface Schema$MetadataHistory {
    /**
     * The type of the API resource. For metadata history resources, the value is youtubePartner#metadataHistory.
     */
    kind?: string | null;
    /**
     * The metadata object contains the metadata provided by the specified source ( origination) at the specified time (timeProvided).
     */
    metadata?: Schema$Metadata;
    /**
     * The origination object contains information that describes the metadata source.
     */
    origination?: Schema$Origination;
    /**
     * The time the metadata was provided.
     */
    timeProvided?: string | null;
  }
  export interface Schema$MetadataHistoryListResponse {
    /**
     * A list of metadata history (youtubePartner#metadataHistory) resources that match the request criteria.
     */
    items?: Schema$MetadataHistory[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#metadataHistoryList.
     */
    kind?: string | null;
  }
  /**
   * This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.
   */
  export interface Schema$ObjectId {
    /**
     * The name of the bucket to which this object belongs.
     */
    bucketName?: string | null;
    /**
     * Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions
     */
    generation?: string | null;
    /**
     * The name of the object.
     */
    objectName?: string | null;
  }
  export interface Schema$Origin {
    source?: string | null;
  }
  export interface Schema$Origination {
    /**
     * The content owner who provided the metadata or ownership information.
     */
    owner?: string | null;
    /**
     * The mechanism by which the piece of metadata, ownership or relationship information was provided.
     */
    source?: string | null;
  }
  export interface Schema$OwnershipConflicts {
    /**
     * A list that identifies ownership conflicts of an asset and the territories where conflicting ownership is inserted.
     */
    general?: Schema$TerritoryConflicts[];
    /**
     * The type of the API resource. For ownershipConflicts resources, the value is youtubePartner#ownershipConflicts.
     */
    kind?: string | null;
    /**
     * A list that identifies ownership conflicts of the mechanical rights for a composition asset and the territories where conflicting ownership is inserted.
     */
    mechanical?: Schema$TerritoryConflicts[];
    /**
     * A list that identifies ownership conflicts of the performance rights for a composition asset and the territories where conflicting ownership is inserted.
     */
    performance?: Schema$TerritoryConflicts[];
    /**
     * A list that identifies ownership conflicts of the synchronization rights for a composition asset and the territories where conflicting ownership is inserted.
     */
    synchronization?: Schema$TerritoryConflicts[];
  }
  export interface Schema$OwnershipHistoryListResponse {
    /**
     * A list of ownership history (youtubePartner#ownershipHistory) resources that match the request criteria.
     */
    items?: Schema$RightsOwnershipHistory[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#ownershipHistoryList.
     */
    kind?: string | null;
  }
  export interface Schema$Package {
    /**
     * The package's metadata file contents.
     */
    content?: string | null;
    /**
     * The list of customer IDs.
     */
    customIds?: string[] | null;
    /**
     * An ID that YouTube assigns and uses to uniquely identify the package.
     */
    id?: string | null;
    /**
     * The type of the API resource. For package resources, this value is youtubePartner#package.
     */
    kind?: string | null;
    /**
     * The desired locale of the error messages as defined in BCP 47 (http: //tools.ietf.org/html/bcp47). For example, "en-US" or "de". If not // specified we will return the error messages in English ("en").
     */
    locale?: string | null;
    /**
     * The package name.
     */
    name?: string | null;
    /**
     * The package status.
     */
    status?: string | null;
    /**
     * The package status reports.
     */
    statusReports?: Schema$StatusReport[];
    /**
     * The package creation time. The value is specified in RFC 3339 ( YYYY-MM-DDThh:mm:ss.000Z) format.
     */
    timeCreated?: string | null;
    /**
     * The package type.
     */
    type?: string | null;
    /**
     * The uploader name.
     */
    uploaderName?: string | null;
  }
  export interface Schema$PackageInsertResponse {
    /**
     * The list of errors and/or warnings.
     */
    errors?: Schema$ValidateError[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#packageInsert.
     */
    kind?: string | null;
    /**
     * The package resource.
     */
    resource?: Schema$Package;
    /**
     * The package insert status. Indicates whether the insert operation completed successfully or identifies the general cause of failure. For most cases where the insert operation failed, the errors are described in the API response's errors object. However, if the operation failed because the package contained non-metadata files, the errors object is not included in the response.
     */
    status?: string | null;
  }
  export interface Schema$PageInfo {
    /**
     * The number of results included in the API response.
     */
    resultsPerPage?: number | null;
    /**
     * The index of the first item in the API response.
     */
    startIndex?: number | null;
    /**
     * The total number of results in the result set.
     */
    totalResults?: number | null;
  }
  export interface Schema$Policy {
    /**
     * The policy's description.
     */
    description?: string | null;
    /**
     * A value that YouTube assigns and uses to uniquely identify the policy.
     */
    id?: string | null;
    /**
     * Identifies this as a policy. Value: "youtubePartner#policy"
     */
    kind?: string | null;
    /**
     * The policy's name.
     */
    name?: string | null;
    /**
     * A list of rules that specify the action that YouTube should take and may optionally specify the conditions under which that action is enforced.
     */
    rules?: Schema$PolicyRule[];
    /**
     * The time the policy was updated.
     */
    timeUpdated?: string | null;
  }
  export interface Schema$PolicyList {
    /**
     * A list of saved policies.
     */
    items?: Schema$Policy[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#policyList.
     */
    kind?: string | null;
  }
  export interface Schema$PolicyRule {
    /**
     * The policy that YouTube should enforce if the rule's conditions are all valid for an asset or for an attempt to view that asset on YouTube.
     */
    action?: string | null;
    /**
     * A set of conditions that must be met for the rule's action (and subactions) to be enforced. For a rule to be valid, all of its conditions must be met.
     */
    conditions?: Schema$Conditions;
    /**
     * A list of additional actions that YouTube should take if the conditions in the rule are met.
     */
    subaction?: string[] | null;
  }
  export interface Schema$PromotedContent {
    /**
     * A list of link targets that will be used to generate the annotation link that appears on videos included in the campaign. If more than one link is specified, the link that is displayed to viewers will be randomly selected from the list.
     */
    link?: Schema$CampaignTargetLink[];
  }
  export interface Schema$Rating {
    /**
     * The rating that the asset received.
     */
    rating?: string | null;
    /**
     * The rating system associated with the rating.
     */
    ratingSystem?: string | null;
  }
  export interface Schema$Reference {
    /**
     * The ID that uniquely identifies the asset that the reference is associated with.
     */
    assetId?: string | null;
    /**
     * Set this field's value to true to indicate that the reference content should be included in YouTube's AudioSwap program.
     */
    audioswapEnabled?: boolean | null;
    /**
     * This field is present if the reference was created by associating an asset with an existing YouTube video that was uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the claim representing the resulting association between the asset and the video.
     */
    claimId?: string | null;
    /**
     * The type of content that the reference represents.
     */
    contentType?: string | null;
    /**
     * The ID that uniquely identifies the reference that this reference duplicates. This field is only present if the reference's status is inactive with reason REASON_DUPLICATE_FOR_OWNERS.
     */
    duplicateLeader?: string | null;
    /**
     * The list of time intervals from this reference that will be ignored during the match process.
     */
    excludedIntervals?: Schema$ExcludedInterval[];
    /**
     * When uploading a reference, set this value to true to indicate that the reference is a pre-generated fingerprint.
     */
    fpDirect?: boolean | null;
    gdataMedia?: Schema$Media;
    /**
     * The MD5 hashcode of the reference content. Deprecated! This is no longer populated.
     */
    hashCode?: string | null;
    /**
     * A value that YouTube assigns and uses to uniquely identify a reference.
     */
    id?: string | null;
    /**
     * Set this value to true to indicate that the reference should not be used to generate claims. This field is only used on AudioSwap references.
     */
    ignoreFpMatch?: boolean | null;
    /**
     * The type of the API resource. For reference resources, the value is youtubePartner#reference.
     */
    kind?: string | null;
    /**
     * The length of the reference in seconds.
     */
    length?: number | null;
    /**
     * Manually added fields for Scotty media upload support on OnePlatform.
     */
    mediaRequestInfo?: Schema$MediaRequestInfo;
    mediaResponseInfo?: Schema$MediaResponseInfo;
    /**
     * The origination object contains information that describes the reference source.
     */
    origination?: Schema$Origination;
    /**
     * The reference's status.
     */
    status?: string | null;
    /**
     * An explanation of how a reference entered its current state. This value is only present if the reference's status is either inactive or deleted.
     */
    statusReason?: string | null;
    /**
     * Set this value to true to indicate that YouTube should prioritize Content ID processing for a video file. YouTube processes urgent video files before other files that are not marked as urgent. This setting is primarily used for videos of live events or other videos that require time-sensitive processing. The sooner YouTube completes Content ID processing for a video, the sooner YouTube can match user-uploaded videos to that video. Note that marking all of your files as urgent could delay processing for those files.
     */
    urgent?: boolean | null;
    /**
     * This field is present if the reference was created by associating an asset with an existing YouTube video that was uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the source video.
     */
    videoId?: string | null;
  }
  export interface Schema$ReferenceConflict {
    /**
     * An id of a conflicting reference.
     */
    conflictingReferenceId?: string | null;
    /**
     * Conflict review expiry time.
     */
    expiryTime?: string | null;
    /**
     * A value that YouTube assigns and uses to uniquely identify a reference conflict.
     */
    id?: string | null;
    /**
     * The type of the API resource. For referenceConflict resources, the value is youtubePartner#referenceConflict.
     */
    kind?: string | null;
    /**
     * The list of matches between conflicting and original references at the time of conflict creation.
     */
    matches?: Schema$ReferenceConflictMatch[];
    /**
     * An id of an original reference.
     */
    originalReferenceId?: string | null;
    /**
     * The referenceConflict's status.
     */
    status?: string | null;
  }
  export interface Schema$ReferenceConflictListResponse {
    /**
     * A list of reference conflicts that match the request criteria.
     */
    items?: Schema$ReferenceConflict[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#referenceConflictList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
  }
  export interface Schema$ReferenceConflictMatch {
    /**
     * Conflicting reference offset in milliseconds.
     */
    conflicting_reference_offset_ms?: string | null;
    /**
     * Match length in milliseconds.
     */
    length_ms?: string | null;
    /**
     * Original reference offset in milliseconds.
     */
    original_reference_offset_ms?: string | null;
    /**
     * The referenceConflictMatch's type.
     */
    type?: string | null;
  }
  export interface Schema$ReferenceListResponse {
    /**
     * A list of references that match the request criteria.
     */
    items?: Schema$Reference[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#referenceList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
  }
  export interface Schema$RightsOwnership {
    /**
     * A list that identifies the owners of an asset and the territories where each owner has ownership. General asset ownership is used for all types of assets and is the only type of ownership data that can be provided for assets that are not compositions. *Note:* You cannot specify general ownership rights and also specify either mechanical, performance, or synchronization rights.
     */
    general?: Schema$TerritoryOwners[];
    /**
     * The type of the API resource. For rightsOwnership resources, the value is youtubePartner#rightsOwnership.
     */
    kind?: string | null;
    /**
     * A list that identifies owners of the mechanical rights for a composition asset.
     */
    mechanical?: Schema$TerritoryOwners[];
    /**
     * A list that identifies owners of the performance rights for a composition asset.
     */
    performance?: Schema$TerritoryOwners[];
    /**
     * A list that identifies owners of the synchronization rights for a composition asset.
     */
    synchronization?: Schema$TerritoryOwners[];
  }
  export interface Schema$RightsOwnershipHistory {
    /**
     * The type of the API resource. For ownership history resources, the value is youtubePartner#rightsOwnershipHistory.
     */
    kind?: string | null;
    /**
     * The origination object contains information that describes the metadata source.
     */
    origination?: Schema$Origination;
    /**
     * The ownership object contains the ownership data provided by the specified source (origination) at the specified time (timeProvided).
     */
    ownership?: Schema$RightsOwnership;
    /**
     * The time that the ownership data was provided.
     */
    timeProvided?: string | null;
  }
  export interface Schema$Segment {
    /**
     * The duration of the segment in milliseconds.
     */
    duration?: string | null;
    /**
     * The type of the API resource. For segment resources, the value is youtubePartner#segment.
     */
    kind?: string | null;
    /**
     * The start time of the segment, measured in milliseconds from the beginning.
     */
    start?: string | null;
  }
  export interface Schema$Segment2 {
    /**
     * The finish time of the segment, measured in milliseconds from the beginning.
     */
    finish?: string | null;
    /**
     * The type of the API resource. For segment resources, the value is youtubePartner#segment.
     */
    kind?: string | null;
    /**
     * The start time of the segment, measured in milliseconds from the beginning.
     */
    start?: string | null;
  }
  export interface Schema$Source {
    /**
     * Id of content owner that initiated the event.
     */
    contentOwnerId?: string | null;
    /**
     * Type of the event source.
     */
    type?: string | null;
    /**
     * Email of user who initiated the event.
     */
    userEmail?: string | null;
  }
  export interface Schema$SpreadsheetTemplate {
    /**
     * The type of the API resource. For spreadsheet template resources, the value is youtubePartner#spreadsheetTemplate.
     */
    kind?: string | null;
    /**
     * The template status.
     */
    status?: string | null;
    /**
     * The template content.
     */
    templateContent?: string | null;
    /**
     * The template name.
     */
    templateName?: string | null;
    /**
     * The template type.
     */
    templateType?: string | null;
  }
  export interface Schema$SpreadsheetTemplateListResponse {
    /**
     * A list of spreadsheet templates (youtubePartner#spreadsheetTemplate) resources that match the request criteria.
     */
    items?: Schema$SpreadsheetTemplate[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#spreadsheetTemplateList.
     */
    kind?: string | null;
    /**
     * The status of the API response.
     */
    status?: string | null;
  }
  export interface Schema$StatusReport {
    /**
     * The content of the report message. Used only in Hybrid.
     */
    statusContent?: string | null;
    /**
     * Status file name. Used only in Hybrid.
     */
    statusFileName?: string | null;
  }
  /**
   * Contains URLs linking back to claim-related pages in Studio.
   */
  export interface Schema$StudioInfo {
    /**
     * Links to the claim page in Studio. Note: this page loads differently depending on whether the claim has "action required" issue or not.
     */
    claimUrl?: string | null;
    /**
     * When claim has an "action required" issue (guaranteed to be at most 1), links to the issue page in Studio.
     */
    issueUrl?: string | null;
    /**
     * Links to the claimed video page in Studio.
     */
    videoUrl?: string | null;
  }
  export interface Schema$TerritoryCondition {
    /**
     * A list of territories. Each territory is an ISO 3166 two-letter country code..
     */
    territories?: string[] | null;
    /**
     * This field indicates whether the associated policy rule is or is not valid in the specified territories.
     */
    type?: string | null;
  }
  export interface Schema$TerritoryConflicts {
    /**
     * A list of conflicting ownerships.
     */
    conflictingOwnership?: Schema$ConflictingOwnership[];
    /**
     * A territories where the ownership conflict is present. Territory is an ISO 3166 two-letter country code..
     */
    territory?: string | null;
  }
  export interface Schema$TerritoryOwners {
    /**
     * The name of the asset's owner or rights administrator.
     */
    owner?: string | null;
    /**
     * The name of the asset's publisher. This field is only used for composition assets, and it is used when the asset owner is not known to have a formal relationship established with YouTube.
     */
    publisher?: string | null;
    /**
     * The percentage of the asset that the owner controls or administers. For composition assets, the value can be any value between 0 and 100 inclusive. For all other assets, the only valid values are 100, which indicates that the owner completely owns the asset in the specified territories, and 0, which indicates that you are removing ownership of the asset in the specified territories.
     */
    ratio?: number | null;
    /**
     * A list of territories where the owner owns (or does not own) the asset. Each territory is an ISO 3166 two-letter country code..
     */
    territories?: string[] | null;
    /**
     * This field indicates whether the ownership data applies or does not apply in the specified territories.
     */
    type?: string | null;
  }
  export interface Schema$TotalMatch {
    /**
     * The total amount of content in the reference which matched the user video in seconds.
     */
    referenceDurationSecs?: string | null;
    /**
     * The total amount of content in the user video which matched the reference in seconds.
     */
    userVideoDurationSecs?: string | null;
  }
  export interface Schema$TypeDetails {
    /**
     * Appeal explanations for dispute_appeal event.
     */
    appealExplanation?: string | null;
    /**
     * Dispute notes for dispute_create events.
     */
    disputeNotes?: string | null;
    /**
     * Dispute reason for dispute_create and dispute_appeal events.
     */
    disputeReason?: string | null;
    /**
     * Status that was a result of update for claim_update event.
     */
    updateStatus?: string | null;
  }
  export interface Schema$Uploader {
    /**
     * The type of the API resource. For uploader resources, the value is youtubePartner#uploader.
     */
    kind?: string | null;
    /**
     * The uploader name.
     */
    uploaderName?: string | null;
  }
  export interface Schema$UploaderListResponse {
    /**
     * A list of uploader (youtubePartner#uploader) resources that match the request criteria.
     */
    items?: Schema$Uploader[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#uploaderList.
     */
    kind?: string | null;
  }
  export interface Schema$ValidateAsyncRequest {
    /**
     * The metadata file contents.
     */
    content?: string | null;
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateAsyncRequest.
     */
    kind?: string | null;
    /**
     * The uploader name.
     */
    uploaderName?: string | null;
  }
  export interface Schema$ValidateAsyncResponse {
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateAsyncResponse.
     */
    kind?: string | null;
    /**
     * The validation status.
     */
    status?: string | null;
    /**
     * The validation ID.
     */
    validationId?: string | null;
  }
  export interface Schema$ValidateError {
    /**
     * The column name where the error occurred.
     */
    columnName?: string | null;
    /**
     * The column number where the error occurred (1-based).
     */
    columnNumber?: number | null;
    /**
     * The line number where the error occurred (1-based).
     */
    lineNumber?: number | null;
    /**
     * The error message.
     */
    message?: string | null;
    /**
     * The code for the error message (if one exists).
     */
    messageCode?: number | null;
    /**
     * The error severity.
     */
    severity?: string | null;
  }
  export interface Schema$ValidateRequest {
    /**
     * The metadata file contents.
     */
    content?: string | null;
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateRequest.
     */
    kind?: string | null;
    /**
     * The desired locale of the error messages as defined in BCP 47 (http: //tools.ietf.org/html/bcp47). For example, "en-US" or "de". If not // specified we will return the error messages in English ("en").
     */
    locale?: string | null;
    /**
     * The uploader name.
     */
    uploaderName?: string | null;
  }
  export interface Schema$ValidateResponse {
    /**
     * The list of errors and/or warnings.
     */
    errors?: Schema$ValidateError[];
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateResponse.
     */
    kind?: string | null;
    /**
     * The validation status.
     */
    status?: string | null;
  }
  export interface Schema$ValidateStatusRequest {
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateStatusRequest.
     */
    kind?: string | null;
    /**
     * The desired locale of the error messages as defined in BCP 47 (http: //tools.ietf.org/html/bcp47). For example, "en-US" or "de". If not // specified we will return the error messages in English ("en").
     */
    locale?: string | null;
    /**
     * The validation ID.
     */
    validationId?: string | null;
  }
  export interface Schema$ValidateStatusResponse {
    /**
     * The list of errors and/or warnings.
     */
    errors?: Schema$ValidateError[];
    /**
     * If this is a metadata-only package.
     */
    isMetadataOnly?: boolean | null;
    /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateStatusResponse.
     */
    kind?: string | null;
    /**
     * The validation status.
     */
    status?: string | null;
  }
  export interface Schema$VideoAdvertisingOption {
    /**
     * A list of times when YouTube can show an in-stream advertisement during playback of the video.
     */
    adBreaks?: Schema$AdBreak[];
    /**
     * A list of ad formats that the video is allowed to show.
     */
    adFormats?: string[] | null;
    /**
     * Enables this video for automatically generated midroll breaks.
     */
    autoGeneratedBreaks?: boolean | null;
    /**
     * The point at which the break occurs during the video playback.
     */
    breakPosition?: string[] | null;
    /**
     * The ID that YouTube uses to uniquely identify the video associated with the advertising settings.
     */
    id?: string | null;
    /**
     * The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOption.
     */
    kind?: string | null;
    /**
     * A value that uniquely identifies the video to the third-party ad server.
     */
    tpAdServerVideoId?: string | null;
    /**
     * The base URL for a third-party ad server from which YouTube can retrieve in-stream ads for the video.
     */
    tpTargetingUrl?: string | null;
    /**
     * A parameter string to append to the end of the request to the third-party ad server.
     */
    tpUrlParameters?: string | null;
  }
  export interface Schema$VideoAdvertisingOptionGetEnabledAdsResponse {
    /**
     * A list of ad breaks that occur in a claimed YouTube video.
     */
    adBreaks?: Schema$AdBreak[];
    /**
     * This field indicates whether YouTube can show ads when the video is played in an embedded player.
     */
    adsOnEmbeds?: boolean | null;
    /**
     * A list that identifies the countries where ads can run and the types of ads allowed in those countries.
     */
    countriesRestriction?: Schema$CountriesRestriction[];
    /**
     * The ID that YouTube uses to uniquely identify the claimed video.
     */
    id?: string | null;
    /**
     * The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOptionGetEnabledAds.
     */
    kind?: string | null;
  }
  export interface Schema$Whitelist {
    /**
     * The YouTube channel ID that uniquely identifies the whitelisted channel.
     */
    id?: string | null;
    /**
     * The type of the API resource. For whitelist resources, this value is youtubePartner#whitelist.
     */
    kind?: string | null;
    /**
     * Title of the whitelisted YouTube channel.
     */
    title?: string | null;
  }
  export interface Schema$WhitelistListResponse {
    /**
     * A list of whitelist resources that match the request criteria.
     */
    items?: Schema$Whitelist[];
    /**
     * The type of the API response. For this operation, the value is youtubePartner#whitelistList.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo?: Schema$PageInfo;
  }
  export interface Schema$YoutubePartnerApiProtoFrontendV1Origin {
    source?: string | null;
  }

  export class Resource$Assetlabels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Insert an asset label for an owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetLabels.insert({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "labelName": "my_labelName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "labelName": "my_labelName"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Assetlabels$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Assetlabels$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetLabel>;
    insert(
      params: Params$Resource$Assetlabels$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Assetlabels$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AssetLabel>,
      callback: BodyResponseCallback<Schema$AssetLabel>
    ): void;
    insert(
      params: Params$Resource$Assetlabels$Insert,
      callback: BodyResponseCallback<Schema$AssetLabel>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AssetLabel>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Assetlabels$Insert
        | BodyResponseCallback<Schema$AssetLabel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetLabel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetLabel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AssetLabel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assetlabels$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetlabels$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assetLabels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetLabel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetLabel>(parameters);
      }
    }

    /**
     * Retrieves a list of all asset labels for an owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetLabels.list({
     *     // The *labelPrefix* parameter identifies the prefix of asset labels to retrieve.
     *     labelPrefix: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *q* parameter specifies the query string to use to filter search results. YouTube searches for the query string in the *labelName* field of asset labels.
     *     q: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Assetlabels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Assetlabels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetLabelListResponse>;
    list(
      params: Params$Resource$Assetlabels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Assetlabels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AssetLabelListResponse>,
      callback: BodyResponseCallback<Schema$AssetLabelListResponse>
    ): void;
    list(
      params: Params$Resource$Assetlabels$List,
      callback: BodyResponseCallback<Schema$AssetLabelListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AssetLabelListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Assetlabels$List
        | BodyResponseCallback<Schema$AssetLabelListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetLabelListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetLabelListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssetLabelListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assetlabels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetlabels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assetLabels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetLabelListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetLabelListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Assetlabels$Insert
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AssetLabel;
  }
  export interface Params$Resource$Assetlabels$List extends StandardParameters {
    /**
     * The *labelPrefix* parameter identifies the prefix of asset labels to retrieve.
     */
    labelPrefix?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *q* parameter specifies the query string to use to filter search results. YouTube searches for the query string in the *labelName* field of asset labels.
     */
    q?: string;
  }

  export class Resource$Assetmatchpolicy {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user. This information is only accessible to an owner of the asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetMatchPolicy.get({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "policyId": "my_policyId",
     *   //   "rules": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Assetmatchpolicy$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Assetmatchpolicy$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetMatchPolicy>;
    get(
      params: Params$Resource$Assetmatchpolicy$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Assetmatchpolicy$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AssetMatchPolicy>,
      callback: BodyResponseCallback<Schema$AssetMatchPolicy>
    ): void;
    get(
      params: Params$Resource$Assetmatchpolicy$Get,
      callback: BodyResponseCallback<Schema$AssetMatchPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Assetmatchpolicy$Get
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AssetMatchPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assetmatchpolicy$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetmatchpolicy$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/assets/{assetId}/matchPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetMatchPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetMatchPolicy>(parameters);
      }
    }

    /**
     * Patches the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetMatchPolicy.patch({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "policyId": "my_policyId",
     *       //   "rules": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "policyId": "my_policyId",
     *   //   "rules": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Assetmatchpolicy$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Assetmatchpolicy$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetMatchPolicy>;
    patch(
      params: Params$Resource$Assetmatchpolicy$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Assetmatchpolicy$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AssetMatchPolicy>,
      callback: BodyResponseCallback<Schema$AssetMatchPolicy>
    ): void;
    patch(
      params: Params$Resource$Assetmatchpolicy$Patch,
      callback: BodyResponseCallback<Schema$AssetMatchPolicy>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Assetmatchpolicy$Patch
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AssetMatchPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assetmatchpolicy$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetmatchpolicy$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/assets/{assetId}/matchPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetMatchPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetMatchPolicy>(parameters);
      }
    }

    /**
     * Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetMatchPolicy.update({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "policyId": "my_policyId",
     *       //   "rules": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "policyId": "my_policyId",
     *   //   "rules": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Assetmatchpolicy$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Assetmatchpolicy$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetMatchPolicy>;
    update(
      params: Params$Resource$Assetmatchpolicy$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Assetmatchpolicy$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AssetMatchPolicy>,
      callback: BodyResponseCallback<Schema$AssetMatchPolicy>
    ): void;
    update(
      params: Params$Resource$Assetmatchpolicy$Update,
      callback: BodyResponseCallback<Schema$AssetMatchPolicy>
    ): void;
    update(callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Assetmatchpolicy$Update
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetMatchPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AssetMatchPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assetmatchpolicy$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetmatchpolicy$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/assets/{assetId}/matchPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetMatchPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetMatchPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Assetmatchpolicy$Get
    extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Assetmatchpolicy$Patch
    extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AssetMatchPolicy;
  }
  export interface Params$Resource$Assetmatchpolicy$Update
    extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AssetMatchPolicy;
  }

  export class Resource$Assetrelationships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a relationship between two assets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetRelationships.delete({
     *     // The *assetRelationshipId* parameter specifies a value that uniquely identifies the relationship you are deleting.
     *     assetRelationshipId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Assetrelationships$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Assetrelationships$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Assetrelationships$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Assetrelationships$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Assetrelationships$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Assetrelationships$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assetrelationships$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetrelationships$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/youtube/partner/v1/assetRelationships/{assetRelationshipId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['assetRelationshipId'],
        pathParams: ['assetRelationshipId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Creates a relationship that links two assets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetRelationships.insert({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "childAssetId": "my_childAssetId",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "parentAssetId": "my_parentAssetId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "childAssetId": "my_childAssetId",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "parentAssetId": "my_parentAssetId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Assetrelationships$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Assetrelationships$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetRelationship>;
    insert(
      params: Params$Resource$Assetrelationships$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Assetrelationships$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AssetRelationship>,
      callback: BodyResponseCallback<Schema$AssetRelationship>
    ): void;
    insert(
      params: Params$Resource$Assetrelationships$Insert,
      callback: BodyResponseCallback<Schema$AssetRelationship>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AssetRelationship>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Assetrelationships$Insert
        | BodyResponseCallback<Schema$AssetRelationship>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetRelationship>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetRelationship>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssetRelationship>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assetrelationships$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetrelationships$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assetRelationships').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetRelationship>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetRelationship>(parameters);
      }
    }

    /**
     * Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either the parent (embedding) or child (embedded) asset in the relationship.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetRelationships.list({
     *     // The *assetId* parameter specifies the asset ID of the asset for which you are retrieving relationships.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Assetrelationships$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Assetrelationships$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetRelationshipListResponse>;
    list(
      params: Params$Resource$Assetrelationships$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Assetrelationships$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AssetRelationshipListResponse>,
      callback: BodyResponseCallback<Schema$AssetRelationshipListResponse>
    ): void;
    list(
      params: Params$Resource$Assetrelationships$List,
      callback: BodyResponseCallback<Schema$AssetRelationshipListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AssetRelationshipListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Assetrelationships$List
        | BodyResponseCallback<Schema$AssetRelationshipListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetRelationshipListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetRelationshipListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssetRelationshipListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assetrelationships$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetrelationships$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assetRelationships').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetRelationshipListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetRelationshipListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Assetrelationships$Delete
    extends StandardParameters {
    /**
     * The *assetRelationshipId* parameter specifies a value that uniquely identifies the relationship you are deleting.
     */
    assetRelationshipId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Assetrelationships$Insert
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AssetRelationship;
  }
  export interface Params$Resource$Assetrelationships$List
    extends StandardParameters {
    /**
     * The *assetId* parameter specifies the asset ID of the asset for which you are retrieving relationships.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
  }

  export class Resource$Assets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the merged, or synthesized, asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assets.get({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset being retrieved.
     *     assetId: 'placeholder-value',
     *     // The *fetchMatchPolicy* parameter specifies the version of the asset's match policy that should be returned in the API response.
     *     fetchMatchPolicy: 'placeholder-value',
     *     // The *fetchMetadata* parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
     *     fetchMetadata: 'placeholder-value',
     *     // The *fetchOwnership* parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
     *     fetchOwnership: 'placeholder-value',
     *     // The *fetchOwnershipConflicts* parameter allows you to retrieve information about ownership conflicts.
     *     fetchOwnershipConflicts: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aliasId": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "label": [],
     *   //   "matchPolicy": {},
     *   //   "matchPolicyEffective": {},
     *   //   "matchPolicyMine": {},
     *   //   "metadata": {},
     *   //   "metadataEffective": {},
     *   //   "metadataMine": {},
     *   //   "ownership": {},
     *   //   "ownershipConflicts": {},
     *   //   "ownershipEffective": {},
     *   //   "ownershipMine": {},
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "type": "my_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Assets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Assets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Asset>;
    get(
      params: Params$Resource$Assets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Assets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Asset>,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    get(
      params: Params$Resource$Assets$Get,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Asset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Assets$Get
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Asset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assets/{assetId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asset>(parameters);
      }
    }

    /**
     * Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assets.insert({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aliasId": [],
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "label": [],
     *       //   "matchPolicy": {},
     *       //   "matchPolicyEffective": {},
     *       //   "matchPolicyMine": {},
     *       //   "metadata": {},
     *       //   "metadataEffective": {},
     *       //   "metadataMine": {},
     *       //   "ownership": {},
     *       //   "ownershipConflicts": {},
     *       //   "ownershipEffective": {},
     *       //   "ownershipMine": {},
     *       //   "status": "my_status",
     *       //   "timeCreated": "my_timeCreated",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aliasId": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "label": [],
     *   //   "matchPolicy": {},
     *   //   "matchPolicyEffective": {},
     *   //   "matchPolicyMine": {},
     *   //   "metadata": {},
     *   //   "metadataEffective": {},
     *   //   "metadataMine": {},
     *   //   "ownership": {},
     *   //   "ownershipConflicts": {},
     *   //   "ownershipEffective": {},
     *   //   "ownershipMine": {},
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "type": "my_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Assets$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Assets$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Asset>;
    insert(
      params: Params$Resource$Assets$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Assets$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Asset>,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    insert(
      params: Params$Resource$Assets$Insert,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Asset>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Assets$Insert
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Asset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assets$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assets$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asset>(parameters);
      }
    }

    /**
     * Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. Note that in cases where duplicate assets have been merged, the API response only contains the synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assets.list({
     *     // The *fetchMatchPolicy* parameter specifies the version of the asset's match policy that should be returned in the API response.
     *     fetchMatchPolicy: 'placeholder-value',
     *     // The *fetchMetadata* parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
     *     fetchMetadata: 'placeholder-value',
     *     // The *fetchOwnership* parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
     *     fetchOwnership: 'placeholder-value',
     *     // The *fetchOwnershipConflicts* parameter allows you to retrieve information about ownership conflicts.
     *     fetchOwnershipConflicts: 'placeholder-value',
     *     // The *id* parameter specifies a comma-separated list of YouTube Asset IDs that identify the assets you want to retrieve. As noted in the method description, if you try to retrieve an asset that YouTube identified as a duplicate and merged with another asset, the API response only returns the synthesized asset. In that case, the aliasId property in the asset resource specifies a list of other asset IDs that can be used to identify that asset. Also note that the API response does not contain duplicates. As such, if your request identifies three asset IDs, and all of those have been merged into a single asset, then the API response identifies one matching asset.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Assets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Assets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetListResponse>;
    list(
      params: Params$Resource$Assets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Assets$List,
      options: MethodOptions | BodyResponseCallback<Schema$AssetListResponse>,
      callback: BodyResponseCallback<Schema$AssetListResponse>
    ): void;
    list(
      params: Params$Resource$Assets$List,
      callback: BodyResponseCallback<Schema$AssetListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AssetListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Assets$List
        | BodyResponseCallback<Schema$AssetListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssetListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetListResponse>(parameters);
      }
    }

    /**
     * Patches the metadata for the specified asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assets.patch({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset being patched.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aliasId": [],
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "label": [],
     *       //   "matchPolicy": {},
     *       //   "matchPolicyEffective": {},
     *       //   "matchPolicyMine": {},
     *       //   "metadata": {},
     *       //   "metadataEffective": {},
     *       //   "metadataMine": {},
     *       //   "ownership": {},
     *       //   "ownershipConflicts": {},
     *       //   "ownershipEffective": {},
     *       //   "ownershipMine": {},
     *       //   "status": "my_status",
     *       //   "timeCreated": "my_timeCreated",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aliasId": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "label": [],
     *   //   "matchPolicy": {},
     *   //   "matchPolicyEffective": {},
     *   //   "matchPolicyMine": {},
     *   //   "metadata": {},
     *   //   "metadataEffective": {},
     *   //   "metadataMine": {},
     *   //   "ownership": {},
     *   //   "ownershipConflicts": {},
     *   //   "ownershipEffective": {},
     *   //   "ownershipMine": {},
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "type": "my_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Assets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Assets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Asset>;
    patch(
      params: Params$Resource$Assets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Assets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Asset>,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    patch(
      params: Params$Resource$Assets$Patch,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Asset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Assets$Patch
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Asset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assets/{assetId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asset>(parameters);
      }
    }

    /**
     * Updates the metadata for the specified asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assets.update({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset being updated.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aliasId": [],
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "label": [],
     *       //   "matchPolicy": {},
     *       //   "matchPolicyEffective": {},
     *       //   "matchPolicyMine": {},
     *       //   "metadata": {},
     *       //   "metadataEffective": {},
     *       //   "metadataMine": {},
     *       //   "ownership": {},
     *       //   "ownershipConflicts": {},
     *       //   "ownershipEffective": {},
     *       //   "ownershipMine": {},
     *       //   "status": "my_status",
     *       //   "timeCreated": "my_timeCreated",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aliasId": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "label": [],
     *   //   "matchPolicy": {},
     *   //   "matchPolicyEffective": {},
     *   //   "matchPolicyMine": {},
     *   //   "metadata": {},
     *   //   "metadataEffective": {},
     *   //   "metadataMine": {},
     *   //   "ownership": {},
     *   //   "ownershipConflicts": {},
     *   //   "ownershipEffective": {},
     *   //   "ownershipMine": {},
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "type": "my_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Assets$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Assets$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Asset>;
    update(
      params: Params$Resource$Assets$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Assets$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Asset>,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    update(
      params: Params$Resource$Assets$Update,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    update(callback: BodyResponseCallback<Schema$Asset>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Assets$Update
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Asset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assets$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assets$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assets/{assetId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asset>(parameters);
      }
    }
  }

  export interface Params$Resource$Assets$Get extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset being retrieved.
     */
    assetId?: string;
    /**
     * The *fetchMatchPolicy* parameter specifies the version of the asset's match policy that should be returned in the API response.
     */
    fetchMatchPolicy?: string;
    /**
     * The *fetchMetadata* parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
     */
    fetchMetadata?: string;
    /**
     * The *fetchOwnership* parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
     */
    fetchOwnership?: string;
    /**
     * The *fetchOwnershipConflicts* parameter allows you to retrieve information about ownership conflicts.
     */
    fetchOwnershipConflicts?: boolean;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Assets$Insert extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Asset;
  }
  export interface Params$Resource$Assets$List extends StandardParameters {
    /**
     * The *fetchMatchPolicy* parameter specifies the version of the asset's match policy that should be returned in the API response.
     */
    fetchMatchPolicy?: string;
    /**
     * The *fetchMetadata* parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
     */
    fetchMetadata?: string;
    /**
     * The *fetchOwnership* parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
     */
    fetchOwnership?: string;
    /**
     * The *fetchOwnershipConflicts* parameter allows you to retrieve information about ownership conflicts.
     */
    fetchOwnershipConflicts?: boolean;
    /**
     * The *id* parameter specifies a comma-separated list of YouTube Asset IDs that identify the assets you want to retrieve. As noted in the method description, if you try to retrieve an asset that YouTube identified as a duplicate and merged with another asset, the API response only returns the synthesized asset. In that case, the aliasId property in the asset resource specifies a list of other asset IDs that can be used to identify that asset. Also note that the API response does not contain duplicates. As such, if your request identifies three asset IDs, and all of those have been merged into a single asset, then the API response identifies one matching asset.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Assets$Patch extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset being patched.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Asset;
  }
  export interface Params$Resource$Assets$Update extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset being updated.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Asset;
  }

  export class Resource$Assetsearch {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetSearch.list({
     *     // The *createdAfter* parameter restricts the set of returned assets to ones originally created on or after the specified datetime. For example: 2015-01-29T23:00:00Z
     *     createdAfter: 'placeholder-value',
     *     // The *createdBefore* parameter restricts the set of returned assets to ones originally created on or before the specified datetime. For example: 2015-01-29T23:00:00Z
     *     createdBefore: 'placeholder-value',
     *     // The *hasConflicts* parameter enables you to only retrieve assets that have ownership conflicts. The only valid value is true. Setting the parameter value to false does not affect the results.
     *     hasConflicts: 'placeholder-value',
     *     // If *includeAnyProvidedlabel* parameter is set to true, will search for assets that contain any of the provided labels; else will search for assets that contain all the provided labels.
     *     includeAnyProvidedlabel: 'placeholder-value',
     *     // A comma-separated list of up to 50 ISRCs. If you specify a value for this parameter, the API server ignores any values set for the following parameters: q, includeAnyProvidedLabel, hasConflicts, labels, metadataSearchFields, sort, and type.
     *     isrcs: 'placeholder-value',
     *     // The *labels* parameter specifies the assets with certain asset labels that you want to retrieve. The parameter value is a comma-separated list of asset labels.
     *     labels: 'placeholder-value',
     *     // The *metadataSearchField* parameter specifies which metadata fields to search by. It is a comma-separated list of metadata field and value pairs connected by colon(:). For example: customId:my_custom_id,artist:Dandexx
     *     metadataSearchFields: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *ownershipRestriction* parameter specifies the ownership filtering option for the search. By default the search is performed in the assets owned by currently authenticated user only.
     *     ownershipRestriction: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *     // YouTube searches within the *id*, *type*, and *customId* fields for all assets as well as in numerous other metadata fields – such as *actor*, *album*, *director*, *isrc*, and *tmsId* – that vary for different types of assets (movies, music videos, etc.).
     *     q: 'placeholder-value',
     *     // The *sort* parameter specifies how the search results should be sorted. Note that results are always sorted in descending order.
     *     sort: 'placeholder-value',
     *     // The *type* parameter specifies the types of assets that you want to retrieve. The parameter value is a comma-separated list of asset types.
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Assetsearch$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Assetsearch$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetSearchResponse>;
    list(
      params: Params$Resource$Assetsearch$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Assetsearch$List,
      options: MethodOptions | BodyResponseCallback<Schema$AssetSearchResponse>,
      callback: BodyResponseCallback<Schema$AssetSearchResponse>
    ): void;
    list(
      params: Params$Resource$Assetsearch$List,
      callback: BodyResponseCallback<Schema$AssetSearchResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AssetSearchResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Assetsearch$List
        | BodyResponseCallback<Schema$AssetSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssetSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assetsearch$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetsearch$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assetSearch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetSearchResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Assetsearch$List extends StandardParameters {
    /**
     * The *createdAfter* parameter restricts the set of returned assets to ones originally created on or after the specified datetime. For example: 2015-01-29T23:00:00Z
     */
    createdAfter?: string;
    /**
     * The *createdBefore* parameter restricts the set of returned assets to ones originally created on or before the specified datetime. For example: 2015-01-29T23:00:00Z
     */
    createdBefore?: string;
    /**
     * The *hasConflicts* parameter enables you to only retrieve assets that have ownership conflicts. The only valid value is true. Setting the parameter value to false does not affect the results.
     */
    hasConflicts?: boolean;
    /**
     * If *includeAnyProvidedlabel* parameter is set to true, will search for assets that contain any of the provided labels; else will search for assets that contain all the provided labels.
     */
    includeAnyProvidedlabel?: boolean;
    /**
     * A comma-separated list of up to 50 ISRCs. If you specify a value for this parameter, the API server ignores any values set for the following parameters: q, includeAnyProvidedLabel, hasConflicts, labels, metadataSearchFields, sort, and type.
     */
    isrcs?: string;
    /**
     * The *labels* parameter specifies the assets with certain asset labels that you want to retrieve. The parameter value is a comma-separated list of asset labels.
     */
    labels?: string;
    /**
     * The *metadataSearchField* parameter specifies which metadata fields to search by. It is a comma-separated list of metadata field and value pairs connected by colon(:). For example: customId:my_custom_id,artist:Dandexx
     */
    metadataSearchFields?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *ownershipRestriction* parameter specifies the ownership filtering option for the search. By default the search is performed in the assets owned by currently authenticated user only.
     */
    ownershipRestriction?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
    /**
     * YouTube searches within the *id*, *type*, and *customId* fields for all assets as well as in numerous other metadata fields – such as *actor*, *album*, *director*, *isrc*, and *tmsId* – that vary for different types of assets (movies, music videos, etc.).
     */
    q?: string;
    /**
     * The *sort* parameter specifies how the search results should be sorted. Note that results are always sorted in descending order.
     */
    sort?: string;
    /**
     * The *type* parameter specifies the types of assets that you want to retrieve. The parameter value is a comma-separated list of asset types.
     */
    type?: string;
  }

  export class Resource$Assetshares {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID *or* it retrieves a list of asset views associated with a specified asset share ID owned by the partner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.assetShares.list({
     *     // The *assetId* parameter specifies the asset ID for which you are retrieving data. The parameter can be an asset view ID or an asset share ID. - If the value is an asset view ID, the API response identifies any asset share ids mapped to the asset view. - If the value is an asset share ID, the API response identifies any asset view ids that maps to that asset share.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Assetshares$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Assetshares$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssetShareListResponse>;
    list(
      params: Params$Resource$Assetshares$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Assetshares$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AssetShareListResponse>,
      callback: BodyResponseCallback<Schema$AssetShareListResponse>
    ): void;
    list(
      params: Params$Resource$Assetshares$List,
      callback: BodyResponseCallback<Schema$AssetShareListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AssetShareListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Assetshares$List
        | BodyResponseCallback<Schema$AssetShareListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetShareListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetShareListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssetShareListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assetshares$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetshares$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/assetShares').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetShareListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetShareListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Assetshares$List extends StandardParameters {
    /**
     * The *assetId* parameter specifies the asset ID for which you are retrieving data. The parameter can be an asset view ID or an asset share ID. - If the value is an asset view ID, the API response identifies any asset share ids mapped to the asset view. - If the value is an asset share ID, the API response identifies any asset view ids that maps to that asset share.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
  }

  export class Resource$Campaigns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a specified campaign for an owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.campaigns.delete({
     *     // The *campaignId* parameter specifies the YouTube campaign ID of the campaign being deleted.
     *     campaignId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Campaigns$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Campaigns$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Campaigns$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Campaigns$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Campaigns$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/campaigns/{campaignId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Retrieves a particular campaign for an owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.campaigns.get({
     *     // The *campaignId* parameter specifies the YouTube campaign ID of the campaign being retrieved.
     *     campaignId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "campaignData": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "timeLastModified": "my_timeLastModified"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Campaigns$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Campaigns$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    get(
      params: Params$Resource$Campaigns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Campaigns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    get(
      params: Params$Resource$Campaigns$Get,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    get(callback: BodyResponseCallback<Schema$Campaign>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Get
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Campaign> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/campaigns/{campaignId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }

    /**
     * Insert a new campaign for an owner using the specified campaign data.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.campaigns.insert({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "campaignData": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "status": "my_status",
     *       //   "timeCreated": "my_timeCreated",
     *       //   "timeLastModified": "my_timeLastModified"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "campaignData": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "timeLastModified": "my_timeLastModified"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Campaigns$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Campaigns$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    insert(
      params: Params$Resource$Campaigns$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Campaigns$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    insert(
      params: Params$Resource$Campaigns$Insert,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Campaign>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Insert
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Campaign> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/campaigns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }

    /**
     * Retrieves a list of campaigns for an owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.campaigns.list({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Campaigns$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Campaigns$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CampaignList>;
    list(
      params: Params$Resource$Campaigns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Campaigns$List,
      options: MethodOptions | BodyResponseCallback<Schema$CampaignList>,
      callback: BodyResponseCallback<Schema$CampaignList>
    ): void;
    list(
      params: Params$Resource$Campaigns$List,
      callback: BodyResponseCallback<Schema$CampaignList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CampaignList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Campaigns$List
        | BodyResponseCallback<Schema$CampaignList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CampaignList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CampaignList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CampaignList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/campaigns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CampaignList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CampaignList>(parameters);
      }
    }

    /**
     * Patch the data for a specific campaign.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.campaigns.patch({
     *     // The *campaignId* parameter specifies the YouTube campaign ID of the campaign being retrieved.
     *     campaignId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "campaignData": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "status": "my_status",
     *       //   "timeCreated": "my_timeCreated",
     *       //   "timeLastModified": "my_timeLastModified"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "campaignData": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "timeLastModified": "my_timeLastModified"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Campaigns$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Campaigns$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    patch(
      params: Params$Resource$Campaigns$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Campaigns$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    patch(
      params: Params$Resource$Campaigns$Patch,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Campaign>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Patch
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Campaign> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/campaigns/{campaignId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }

    /**
     * Update the data for a specific campaign.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.campaigns.update({
     *     // The *campaignId* parameter specifies the YouTube campaign ID of the campaign being retrieved.
     *     campaignId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "campaignData": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "status": "my_status",
     *       //   "timeCreated": "my_timeCreated",
     *       //   "timeLastModified": "my_timeLastModified"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "campaignData": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "status": "my_status",
     *   //   "timeCreated": "my_timeCreated",
     *   //   "timeLastModified": "my_timeLastModified"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Campaigns$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Campaigns$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    update(
      params: Params$Resource$Campaigns$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Campaigns$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    update(
      params: Params$Resource$Campaigns$Update,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    update(callback: BodyResponseCallback<Schema$Campaign>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Update
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Campaign>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Campaign> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/campaigns/{campaignId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['campaignId'],
        pathParams: ['campaignId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }
  }

  export interface Params$Resource$Campaigns$Delete extends StandardParameters {
    /**
     * The *campaignId* parameter specifies the YouTube campaign ID of the campaign being deleted.
     */
    campaignId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Campaigns$Get extends StandardParameters {
    /**
     * The *campaignId* parameter specifies the YouTube campaign ID of the campaign being retrieved.
     */
    campaignId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Campaigns$Insert extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Campaign;
  }
  export interface Params$Resource$Campaigns$List extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Campaigns$Patch extends StandardParameters {
    /**
     * The *campaignId* parameter specifies the YouTube campaign ID of the campaign being retrieved.
     */
    campaignId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Campaign;
  }
  export interface Params$Resource$Campaigns$Update extends StandardParameters {
    /**
     * The *campaignId* parameter specifies the YouTube campaign ID of the campaign being retrieved.
     */
    campaignId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Campaign;
  }

  export class Resource$Claimhistory {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the claim history for a specified claim.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.claimHistory.get({
     *     // The *claimId* parameter specifies the YouTube claim ID of the claim for which you are retrieving the claim history.
     *     claimId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "event": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "uploaderChannelId": "my_uploaderChannelId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Claimhistory$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Claimhistory$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClaimHistory>;
    get(
      params: Params$Resource$Claimhistory$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Claimhistory$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ClaimHistory>,
      callback: BodyResponseCallback<Schema$ClaimHistory>
    ): void;
    get(
      params: Params$Resource$Claimhistory$Get,
      callback: BodyResponseCallback<Schema$ClaimHistory>
    ): void;
    get(callback: BodyResponseCallback<Schema$ClaimHistory>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Claimhistory$Get
        | BodyResponseCallback<Schema$ClaimHistory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClaimHistory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClaimHistory>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ClaimHistory> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Claimhistory$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claimhistory$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/claimHistory/{claimId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClaimHistory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClaimHistory>(parameters);
      }
    }
  }

  export interface Params$Resource$Claimhistory$Get extends StandardParameters {
    /**
     * The *claimId* parameter specifies the YouTube claim ID of the claim for which you are retrieving the claim history.
     */
    claimId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Claims {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a specific claim by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.claims.get({
     *     // The *claimId* parameter specifies the claim ID of the claim being retrieved.
     *     claimId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedPolicy": {},
     *   //   "assetId": "my_assetId",
     *   //   "blockOutsideOwnership": false,
     *   //   "contentType": "my_contentType",
     *   //   "id": "my_id",
     *   //   "isPartnerUploaded": false,
     *   //   "kind": "my_kind",
     *   //   "matchInfo": {},
     *   //   "origin": {},
     *   //   "policy": {},
     *   //   "status": "my_status",
     *   //   "studioInfo": {},
     *   //   "timeCreated": "my_timeCreated",
     *   //   "ugcType": "my_ugcType",
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Claims$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Claims$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Claim>;
    get(
      params: Params$Resource$Claims$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Claims$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Claim>,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    get(
      params: Params$Resource$Claims$Get,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    get(callback: BodyResponseCallback<Schema$Claim>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Claims$Get
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Claim> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Claims$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claims$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/claims/{claimId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Claim>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Claim>(parameters);
      }
    }

    /**
     * Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as the API user sending the request. You can set the claim's policy in any of the following ways: - Use the claim resource's policy property to identify a saved policy by its unique ID. - Use the claim resource's policy property to specify a custom set of rules.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.claims.insert({
     *     // restricted
     *     isManualClaim: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appliedPolicy": {},
     *       //   "assetId": "my_assetId",
     *       //   "blockOutsideOwnership": false,
     *       //   "contentType": "my_contentType",
     *       //   "id": "my_id",
     *       //   "isPartnerUploaded": false,
     *       //   "kind": "my_kind",
     *       //   "matchInfo": {},
     *       //   "origin": {},
     *       //   "policy": {},
     *       //   "status": "my_status",
     *       //   "studioInfo": {},
     *       //   "timeCreated": "my_timeCreated",
     *       //   "ugcType": "my_ugcType",
     *       //   "videoId": "my_videoId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedPolicy": {},
     *   //   "assetId": "my_assetId",
     *   //   "blockOutsideOwnership": false,
     *   //   "contentType": "my_contentType",
     *   //   "id": "my_id",
     *   //   "isPartnerUploaded": false,
     *   //   "kind": "my_kind",
     *   //   "matchInfo": {},
     *   //   "origin": {},
     *   //   "policy": {},
     *   //   "status": "my_status",
     *   //   "studioInfo": {},
     *   //   "timeCreated": "my_timeCreated",
     *   //   "ugcType": "my_ugcType",
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Claims$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Claims$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Claim>;
    insert(
      params: Params$Resource$Claims$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Claims$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Claim>,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    insert(
      params: Params$Resource$Claims$Insert,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Claim>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Claims$Insert
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Claim> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Claims$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claims$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/claims').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Claim>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Claim>(parameters);
      }
    }

    /**
     * Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results are sorted in descending order of creation time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.claims.list({
     *     // Use the claimSearch.list method's assetId parameter to search for claim snippets by asset ID. You can then retrieve the claim resources for those claims by using this method's *id* parameter to specify a comma-separated list of claim IDs.
     *     assetId: 'placeholder-value',
     *     // The *id* parameter specifies a list of comma-separated YouTube claim IDs to retrieve.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *     // Use the claimSearch.list method's q parameter to search for claim snippets that match a particular query string. You can then retrieve the claim resources for those claims by using this method's *id* parameter to specify a comma-separated list of claim IDs.
     *     q: 'placeholder-value',
     *     // Use the claimSearch.list method's videoId parameter to search for claim snippets by video ID. You can then retrieve the claim resources for those claims by using this method's *id* parameter to specify a comma-separated list of claim IDs.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "previousPageToken": "my_previousPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Claims$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Claims$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClaimListResponse>;
    list(
      params: Params$Resource$Claims$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Claims$List,
      options: MethodOptions | BodyResponseCallback<Schema$ClaimListResponse>,
      callback: BodyResponseCallback<Schema$ClaimListResponse>
    ): void;
    list(
      params: Params$Resource$Claims$List,
      callback: BodyResponseCallback<Schema$ClaimListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ClaimListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Claims$List
        | BodyResponseCallback<Schema$ClaimListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClaimListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClaimListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ClaimListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Claims$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claims$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/claims').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClaimListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClaimListResponse>(parameters);
      }
    }

    /**
     * Patches an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.claims.patch({
     *     // The *claimId* parameter specifies the claim ID of the claim being updated.
     *     claimId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appliedPolicy": {},
     *       //   "assetId": "my_assetId",
     *       //   "blockOutsideOwnership": false,
     *       //   "contentType": "my_contentType",
     *       //   "id": "my_id",
     *       //   "isPartnerUploaded": false,
     *       //   "kind": "my_kind",
     *       //   "matchInfo": {},
     *       //   "origin": {},
     *       //   "policy": {},
     *       //   "status": "my_status",
     *       //   "studioInfo": {},
     *       //   "timeCreated": "my_timeCreated",
     *       //   "ugcType": "my_ugcType",
     *       //   "videoId": "my_videoId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedPolicy": {},
     *   //   "assetId": "my_assetId",
     *   //   "blockOutsideOwnership": false,
     *   //   "contentType": "my_contentType",
     *   //   "id": "my_id",
     *   //   "isPartnerUploaded": false,
     *   //   "kind": "my_kind",
     *   //   "matchInfo": {},
     *   //   "origin": {},
     *   //   "policy": {},
     *   //   "status": "my_status",
     *   //   "studioInfo": {},
     *   //   "timeCreated": "my_timeCreated",
     *   //   "ugcType": "my_ugcType",
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Claims$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Claims$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Claim>;
    patch(
      params: Params$Resource$Claims$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Claims$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Claim>,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    patch(
      params: Params$Resource$Claims$Patch,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Claim>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Claims$Patch
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Claim> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Claims$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claims$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/claims/{claimId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Claim>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Claim>(parameters);
      }
    }

    /**
     * Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.claims.update({
     *     // The *claimId* parameter specifies the claim ID of the claim being updated.
     *     claimId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appliedPolicy": {},
     *       //   "assetId": "my_assetId",
     *       //   "blockOutsideOwnership": false,
     *       //   "contentType": "my_contentType",
     *       //   "id": "my_id",
     *       //   "isPartnerUploaded": false,
     *       //   "kind": "my_kind",
     *       //   "matchInfo": {},
     *       //   "origin": {},
     *       //   "policy": {},
     *       //   "status": "my_status",
     *       //   "studioInfo": {},
     *       //   "timeCreated": "my_timeCreated",
     *       //   "ugcType": "my_ugcType",
     *       //   "videoId": "my_videoId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedPolicy": {},
     *   //   "assetId": "my_assetId",
     *   //   "blockOutsideOwnership": false,
     *   //   "contentType": "my_contentType",
     *   //   "id": "my_id",
     *   //   "isPartnerUploaded": false,
     *   //   "kind": "my_kind",
     *   //   "matchInfo": {},
     *   //   "origin": {},
     *   //   "policy": {},
     *   //   "status": "my_status",
     *   //   "studioInfo": {},
     *   //   "timeCreated": "my_timeCreated",
     *   //   "ugcType": "my_ugcType",
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Claims$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Claims$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Claim>;
    update(
      params: Params$Resource$Claims$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Claims$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Claim>,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    update(
      params: Params$Resource$Claims$Update,
      callback: BodyResponseCallback<Schema$Claim>
    ): void;
    update(callback: BodyResponseCallback<Schema$Claim>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Claims$Update
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Claim>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Claim> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Claims$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claims$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/claims/{claimId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Claim>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Claim>(parameters);
      }
    }
  }

  export interface Params$Resource$Claims$Get extends StandardParameters {
    /**
     * The *claimId* parameter specifies the claim ID of the claim being retrieved.
     */
    claimId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Claims$Insert extends StandardParameters {
    /**
     * restricted
     */
    isManualClaim?: boolean;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Claim;
  }
  export interface Params$Resource$Claims$List extends StandardParameters {
    /**
     * Use the claimSearch.list method's assetId parameter to search for claim snippets by asset ID. You can then retrieve the claim resources for those claims by using this method's *id* parameter to specify a comma-separated list of claim IDs.
     */
    assetId?: string;
    /**
     * The *id* parameter specifies a list of comma-separated YouTube claim IDs to retrieve.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
    /**
     * Use the claimSearch.list method's q parameter to search for claim snippets that match a particular query string. You can then retrieve the claim resources for those claims by using this method's *id* parameter to specify a comma-separated list of claim IDs.
     */
    q?: string;
    /**
     * Use the claimSearch.list method's videoId parameter to search for claim snippets by video ID. You can then retrieve the claim resources for those claims by using this method's *id* parameter to specify a comma-separated list of claim IDs.
     */
    videoId?: string;
  }
  export interface Params$Resource$Claims$Patch extends StandardParameters {
    /**
     * The *claimId* parameter specifies the claim ID of the claim being updated.
     */
    claimId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Claim;
  }
  export interface Params$Resource$Claims$Update extends StandardParameters {
    /**
     * The *claimId* parameter specifies the claim ID of the claim being updated.
     */
    claimId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Claim;
  }

  export class Resource$Claimsearch {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific asset or video or that match a specified query string.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.claimSearch.list({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving claims.
     *     assetId: 'placeholder-value',
     *     // The *contentType* parameter specifies the content type of claims that you want to retrieve.
     *     contentType: 'placeholder-value',
     *     // The *createdAfter* parameter allows you to restrict the set of returned claims to ones created on or after the specified date (inclusive).
     *     createdAfter: 'placeholder-value',
     *     // The *createdBefore* parameter allows you to restrict the set of returned claims to ones created before the specified date (exclusive).
     *     createdBefore: 'placeholder-value',
     *     // The *inactiveReasons* parameter allows you to specify what kind of inactive claims you want to find based on the reasons why the claims became inactive.
     *     inactiveReasons: 'placeholder-value',
     *     // Used along with the *videoId* parameter this parameter determines whether or not to include third party claims in the search results.
     *     includeThirdPartyClaims: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *origin* parameter specifies the origins you want to find claims for. It is a comma-separated list of origin values.
     *     origin: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *     // The *partnerUploaded* parameter specifies whether you want to filter your search results to only partner uploaded or non partner uploaded claims.
     *     partnerUploaded: 'placeholder-value',
     *     // The *q* parameter specifies the query string to use to filter search results. YouTube searches for the query string in the following claim fields: *video_title*, *video_keywords*, *user_name*, *isrc*, *iswc*, *grid*, *custom_id*, and in the content owner's email address.
     *     q: 'placeholder-value',
     *     // The *referenceId* parameter specifies the YouTube reference ID of the reference for which you are retrieving claims.
     *     referenceId: 'placeholder-value',
     *     // The *sort* parameter specifies the method that will be used to order resources in the API response. The default value is date. However, if the status parameter value is either appealed, disputed, pending, potential, or routedForReview, then results will be sorted by the time that the claim review period expires.
     *     sort: 'placeholder-value',
     *     // The *status* parameter restricts your results to only claims in the specified status.
     *     status: 'placeholder-value',
     *     // The *statusModifiedAfter* parameter allows you to restrict the result set to only include claims that have had their status modified on or after the specified date (inclusive). The date specified must be on or after June 30, 2016 (2016-06-30). The parameter value's format is YYYY-MM-DD.
     *     statusModifiedAfter: 'placeholder-value',
     *     // The *statusModifiedBefore* parameter allows you to restrict the result set to only include claims that have had their status modified before the specified date (exclusive). The date specified must be on or after July 1, 2016 (2016-07-01). The parameter value's format is YYYY-MM-DD.
     *     statusModifiedBefore: 'placeholder-value',
     *     // The *videoId* parameter specifies comma-separated list of YouTube video IDs for which you are retrieving claims.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "previousPageToken": "my_previousPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Claimsearch$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Claimsearch$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClaimSearchResponse>;
    list(
      params: Params$Resource$Claimsearch$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Claimsearch$List,
      options: MethodOptions | BodyResponseCallback<Schema$ClaimSearchResponse>,
      callback: BodyResponseCallback<Schema$ClaimSearchResponse>
    ): void;
    list(
      params: Params$Resource$Claimsearch$List,
      callback: BodyResponseCallback<Schema$ClaimSearchResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ClaimSearchResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Claimsearch$List
        | BodyResponseCallback<Schema$ClaimSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClaimSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClaimSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ClaimSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Claimsearch$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claimsearch$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/claimSearch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClaimSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClaimSearchResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Claimsearch$List extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving claims.
     */
    assetId?: string;
    /**
     * The *contentType* parameter specifies the content type of claims that you want to retrieve.
     */
    contentType?: string;
    /**
     * The *createdAfter* parameter allows you to restrict the set of returned claims to ones created on or after the specified date (inclusive).
     */
    createdAfter?: string;
    /**
     * The *createdBefore* parameter allows you to restrict the set of returned claims to ones created before the specified date (exclusive).
     */
    createdBefore?: string;
    /**
     * The *inactiveReasons* parameter allows you to specify what kind of inactive claims you want to find based on the reasons why the claims became inactive.
     */
    inactiveReasons?: string;
    /**
     * Used along with the *videoId* parameter this parameter determines whether or not to include third party claims in the search results.
     */
    includeThirdPartyClaims?: boolean;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *origin* parameter specifies the origins you want to find claims for. It is a comma-separated list of origin values.
     */
    origin?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
    /**
     * The *partnerUploaded* parameter specifies whether you want to filter your search results to only partner uploaded or non partner uploaded claims.
     */
    partnerUploaded?: boolean;
    /**
     * The *q* parameter specifies the query string to use to filter search results. YouTube searches for the query string in the following claim fields: *video_title*, *video_keywords*, *user_name*, *isrc*, *iswc*, *grid*, *custom_id*, and in the content owner's email address.
     */
    q?: string;
    /**
     * The *referenceId* parameter specifies the YouTube reference ID of the reference for which you are retrieving claims.
     */
    referenceId?: string;
    /**
     * The *sort* parameter specifies the method that will be used to order resources in the API response. The default value is date. However, if the status parameter value is either appealed, disputed, pending, potential, or routedForReview, then results will be sorted by the time that the claim review period expires.
     */
    sort?: string;
    /**
     * The *status* parameter restricts your results to only claims in the specified status.
     */
    status?: string;
    /**
     * The *statusModifiedAfter* parameter allows you to restrict the result set to only include claims that have had their status modified on or after the specified date (inclusive). The date specified must be on or after June 30, 2016 (2016-06-30). The parameter value's format is YYYY-MM-DD.
     */
    statusModifiedAfter?: string;
    /**
     * The *statusModifiedBefore* parameter allows you to restrict the result set to only include claims that have had their status modified before the specified date (exclusive). The date specified must be on or after July 1, 2016 (2016-07-01). The parameter value's format is YYYY-MM-DD.
     */
    statusModifiedBefore?: string;
    /**
     * The *videoId* parameter specifies comma-separated list of YouTube video IDs for which you are retrieving claims.
     */
    videoId?: string;
  }

  export class Resource$Contentowners {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves information about the specified content owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.contentOwners.get({
     *     // The *contentOwnerId* parameter specifies a value that uniquely identifies the content owner.
     *     contentOwnerId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "conflictNotificationEmail": "my_conflictNotificationEmail",
     *   //   "displayName": "my_displayName",
     *   //   "disputeNotificationEmails": [],
     *   //   "fingerprintReportNotificationEmails": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "primaryNotificationEmails": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Contentowners$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Contentowners$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContentOwner>;
    get(
      params: Params$Resource$Contentowners$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Contentowners$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ContentOwner>,
      callback: BodyResponseCallback<Schema$ContentOwner>
    ): void;
    get(
      params: Params$Resource$Contentowners$Get,
      callback: BodyResponseCallback<Schema$ContentOwner>
    ): void;
    get(callback: BodyResponseCallback<Schema$ContentOwner>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Contentowners$Get
        | BodyResponseCallback<Schema$ContentOwner>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContentOwner>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContentOwner>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ContentOwner> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentowners$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentowners$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/contentOwners/{contentOwnerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['contentOwnerId'],
        pathParams: ['contentOwnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContentOwner>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContentOwner>(parameters);
      }
    }

    /**
     * Retrieves a list of content owners that match the request criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtubepartner',
     *       'https://www.googleapis.com/auth/youtubepartner-content-owner-readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.contentOwners.list({
     *     // The *fetchMine* parameter restricts the result set to content owners associated with the currently authenticated API user.
     *     fetchMine: 'placeholder-value',
     *     // The *id* parameter specifies a comma-separated list of YouTube content owner IDs to retrieve.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Contentowners$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Contentowners$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContentOwnerListResponse>;
    list(
      params: Params$Resource$Contentowners$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Contentowners$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContentOwnerListResponse>,
      callback: BodyResponseCallback<Schema$ContentOwnerListResponse>
    ): void;
    list(
      params: Params$Resource$Contentowners$List,
      callback: BodyResponseCallback<Schema$ContentOwnerListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ContentOwnerListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Contentowners$List
        | BodyResponseCallback<Schema$ContentOwnerListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContentOwnerListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContentOwnerListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ContentOwnerListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentowners$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentowners$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/contentOwners').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContentOwnerListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContentOwnerListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Contentowners$Get
    extends StandardParameters {
    /**
     * The *contentOwnerId* parameter specifies a value that uniquely identifies the content owner.
     */
    contentOwnerId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Contentowners$List
    extends StandardParameters {
    /**
     * The *fetchMine* parameter restricts the result set to content owners associated with the currently authenticated API user.
     */
    fetchMine?: boolean;
    /**
     * The *id* parameter specifies a comma-separated list of YouTube content owner IDs to retrieve.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Livecuepoints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a cuepoint into a live broadcast.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.liveCuepoints.insert({
     *     // The *channelId* parameter identifies the channel that owns the broadcast into which the cuepoint is being inserted.
     *     channelId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners. You can obtain the content owner ID that will serve as the parameter value by calling the YouTube Content ID API's contentOwners.list method.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "broadcastId": "my_broadcastId",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "settings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "broadcastId": "my_broadcastId",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "settings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Livecuepoints$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Livecuepoints$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveCuepoint>;
    insert(
      params: Params$Resource$Livecuepoints$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Livecuepoints$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveCuepoint>,
      callback: BodyResponseCallback<Schema$LiveCuepoint>
    ): void;
    insert(
      params: Params$Resource$Livecuepoints$Insert,
      callback: BodyResponseCallback<Schema$LiveCuepoint>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveCuepoint>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livecuepoints$Insert
        | BodyResponseCallback<Schema$LiveCuepoint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveCuepoint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveCuepoint>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveCuepoint> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livecuepoints$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livecuepoints$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/liveCuepoints').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['channelId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveCuepoint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveCuepoint>(parameters);
      }
    }
  }

  export interface Params$Resource$Livecuepoints$Insert
    extends StandardParameters {
    /**
     * The *channelId* parameter identifies the channel that owns the broadcast into which the cuepoint is being inserted.
     */
    channelId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners. You can obtain the content owner ID that will serve as the parameter value by calling the YouTube Content ID API's contentOwners.list method.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveCuepoint;
  }

  export class Resource$Metadatahistory {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.metadataHistory.list({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving a metadata history.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Metadatahistory$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Metadatahistory$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MetadataHistoryListResponse>;
    list(
      params: Params$Resource$Metadatahistory$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Metadatahistory$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MetadataHistoryListResponse>,
      callback: BodyResponseCallback<Schema$MetadataHistoryListResponse>
    ): void;
    list(
      params: Params$Resource$Metadatahistory$List,
      callback: BodyResponseCallback<Schema$MetadataHistoryListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$MetadataHistoryListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Metadatahistory$List
        | BodyResponseCallback<Schema$MetadataHistoryListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MetadataHistoryListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MetadataHistoryListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MetadataHistoryListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Metadatahistory$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Metadatahistory$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/metadataHistory').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MetadataHistoryListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MetadataHistoryListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Metadatahistory$List
    extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving a metadata history.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Ownership {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.ownership.get({
     *     // The *assetId* parameter specifies the YouTube asset ID for which you are retrieving ownership data.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "general": [],
     *   //   "kind": "my_kind",
     *   //   "mechanical": [],
     *   //   "performance": [],
     *   //   "synchronization": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Ownership$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Ownership$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RightsOwnership>;
    get(
      params: Params$Resource$Ownership$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Ownership$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RightsOwnership>,
      callback: BodyResponseCallback<Schema$RightsOwnership>
    ): void;
    get(
      params: Params$Resource$Ownership$Get,
      callback: BodyResponseCallback<Schema$RightsOwnership>
    ): void;
    get(callback: BodyResponseCallback<Schema$RightsOwnership>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Ownership$Get
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RightsOwnership> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ownership$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ownership$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/assets/{assetId}/ownership'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RightsOwnership>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RightsOwnership>(parameters);
      }
    }

    /**
     * Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.ownership.patch({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset being updated.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "general": [],
     *       //   "kind": "my_kind",
     *       //   "mechanical": [],
     *       //   "performance": [],
     *       //   "synchronization": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "general": [],
     *   //   "kind": "my_kind",
     *   //   "mechanical": [],
     *   //   "performance": [],
     *   //   "synchronization": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Ownership$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Ownership$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RightsOwnership>;
    patch(
      params: Params$Resource$Ownership$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Ownership$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$RightsOwnership>,
      callback: BodyResponseCallback<Schema$RightsOwnership>
    ): void;
    patch(
      params: Params$Resource$Ownership$Patch,
      callback: BodyResponseCallback<Schema$RightsOwnership>
    ): void;
    patch(callback: BodyResponseCallback<Schema$RightsOwnership>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Ownership$Patch
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RightsOwnership> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ownership$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ownership$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/assets/{assetId}/ownership'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RightsOwnership>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RightsOwnership>(parameters);
      }
    }

    /**
     * Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.ownership.update({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset being updated.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "general": [],
     *       //   "kind": "my_kind",
     *       //   "mechanical": [],
     *       //   "performance": [],
     *       //   "synchronization": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "general": [],
     *   //   "kind": "my_kind",
     *   //   "mechanical": [],
     *   //   "performance": [],
     *   //   "synchronization": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Ownership$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Ownership$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RightsOwnership>;
    update(
      params: Params$Resource$Ownership$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Ownership$Update,
      options: MethodOptions | BodyResponseCallback<Schema$RightsOwnership>,
      callback: BodyResponseCallback<Schema$RightsOwnership>
    ): void;
    update(
      params: Params$Resource$Ownership$Update,
      callback: BodyResponseCallback<Schema$RightsOwnership>
    ): void;
    update(callback: BodyResponseCallback<Schema$RightsOwnership>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Ownership$Update
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RightsOwnership>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RightsOwnership> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ownership$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ownership$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/assets/{assetId}/ownership'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: ['assetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RightsOwnership>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RightsOwnership>(parameters);
      }
    }
  }

  export interface Params$Resource$Ownership$Get extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID for which you are retrieving ownership data.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Ownership$Patch extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset being updated.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RightsOwnership;
  }
  export interface Params$Resource$Ownership$Update extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset being updated.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RightsOwnership;
  }

  export class Resource$Ownershiphistory {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each content owner and data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.ownershipHistory.list({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving an ownership data history.
     *     assetId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Ownershiphistory$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Ownershiphistory$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OwnershipHistoryListResponse>;
    list(
      params: Params$Resource$Ownershiphistory$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Ownershiphistory$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OwnershipHistoryListResponse>,
      callback: BodyResponseCallback<Schema$OwnershipHistoryListResponse>
    ): void;
    list(
      params: Params$Resource$Ownershiphistory$List,
      callback: BodyResponseCallback<Schema$OwnershipHistoryListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$OwnershipHistoryListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Ownershiphistory$List
        | BodyResponseCallback<Schema$OwnershipHistoryListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OwnershipHistoryListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OwnershipHistoryListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OwnershipHistoryListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Ownershiphistory$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ownershiphistory$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/ownershipHistory').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['assetId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OwnershipHistoryListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OwnershipHistoryListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Ownershiphistory$List
    extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving an ownership data history.
     */
    assetId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Package {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves information for the specified package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.package.get({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *packageId* parameter specifies the Content Delivery package ID of the package being retrieved.
     *     packageId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "content": "my_content",
     *   //   "customIds": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "locale": "my_locale",
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "statusReports": [],
     *   //   "timeCreated": "my_timeCreated",
     *   //   "type": "my_type",
     *   //   "uploaderName": "my_uploaderName"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Package$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Package$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Package>;
    get(
      params: Params$Resource$Package$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Package$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Package>,
      callback: BodyResponseCallback<Schema$Package>
    ): void;
    get(
      params: Params$Resource$Package$Get,
      callback: BodyResponseCallback<Schema$Package>
    ): void;
    get(callback: BodyResponseCallback<Schema$Package>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Package$Get
        | BodyResponseCallback<Schema$Package>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Package>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Package>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Package> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Package$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Package$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/package/{packageId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['packageId'],
        pathParams: ['packageId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Package>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Package>(parameters);
      }
    }

    /**
     * Inserts a metadata-only package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.package.insert({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "content": "my_content",
     *       //   "customIds": [],
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "locale": "my_locale",
     *       //   "name": "my_name",
     *       //   "status": "my_status",
     *       //   "statusReports": [],
     *       //   "timeCreated": "my_timeCreated",
     *       //   "type": "my_type",
     *       //   "uploaderName": "my_uploaderName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errors": [],
     *   //   "kind": "my_kind",
     *   //   "resource": {},
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Package$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Package$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PackageInsertResponse>;
    insert(
      params: Params$Resource$Package$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Package$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PackageInsertResponse>,
      callback: BodyResponseCallback<Schema$PackageInsertResponse>
    ): void;
    insert(
      params: Params$Resource$Package$Insert,
      callback: BodyResponseCallback<Schema$PackageInsertResponse>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PackageInsertResponse>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Package$Insert
        | BodyResponseCallback<Schema$PackageInsertResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PackageInsertResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PackageInsertResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PackageInsertResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Package$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Package$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/package').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PackageInsertResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PackageInsertResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Package$Get extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *packageId* parameter specifies the Content Delivery package ID of the package being retrieved.
     */
    packageId?: string;
  }
  export interface Params$Resource$Package$Insert extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Package;
  }

  export class Resource$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the specified saved policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.policies.get({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *policyId* parameter specifies a value that uniquely identifies the policy being retrieved.
     *     policyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "timeUpdated": "my_timeUpdated"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    get(
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(callback: BodyResponseCallback<Schema$Policy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Policies$Get
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/policies/{policyId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['policyId'],
        pathParams: ['policyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Creates a saved policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.policies.insert({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "timeUpdated": "my_timeUpdated"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "timeUpdated": "my_timeUpdated"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Policies$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Policies$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    insert(
      params: Params$Resource$Policies$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Policies$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    insert(
      params: Params$Resource$Policies$Insert,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Policy>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Policies$Insert
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Retrieves a list of the content owner's saved policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.policies.list({
     *     // The *id* parameter specifies a comma-separated list of saved policy IDs to retrieve. Only policies belonging to the currently authenticated content owner will be available.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *sort* parameter specifies how the search results should be sorted.
     *     sort: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Policies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PolicyList>;
    list(
      params: Params$Resource$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Policies$List,
      options: MethodOptions | BodyResponseCallback<Schema$PolicyList>,
      callback: BodyResponseCallback<Schema$PolicyList>
    ): void;
    list(
      params: Params$Resource$Policies$List,
      callback: BodyResponseCallback<Schema$PolicyList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PolicyList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Policies$List
        | BodyResponseCallback<Schema$PolicyList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PolicyList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PolicyList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PolicyList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PolicyList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PolicyList>(parameters);
      }
    }

    /**
     * Patches the specified saved policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.policies.patch({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *policyId* parameter specifies a value that uniquely identifies the policy being updated.
     *     policyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "timeUpdated": "my_timeUpdated"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "timeUpdated": "my_timeUpdated"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Policies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Policies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    patch(
      params: Params$Resource$Policies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Policies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    patch(
      params: Params$Resource$Policies$Patch,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Policy>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Policies$Patch
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/policies/{policyId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['policyId'],
        pathParams: ['policyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Updates the specified saved policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.policies.update({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *policyId* parameter specifies a value that uniquely identifies the policy being updated.
     *     policyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "timeUpdated": "my_timeUpdated"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "timeUpdated": "my_timeUpdated"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Policies$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Policies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    update(
      params: Params$Resource$Policies$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Policies$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    update(
      params: Params$Resource$Policies$Update,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    update(callback: BodyResponseCallback<Schema$Policy>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Policies$Update
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/policies/{policyId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['policyId'],
        pathParams: ['policyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Policies$Get extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *policyId* parameter specifies a value that uniquely identifies the policy being retrieved.
     */
    policyId?: string;
  }
  export interface Params$Resource$Policies$Insert extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Policies$List extends StandardParameters {
    /**
     * The *id* parameter specifies a comma-separated list of saved policy IDs to retrieve. Only policies belonging to the currently authenticated content owner will be available.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *sort* parameter specifies how the search results should be sorted.
     */
    sort?: string;
  }
  export interface Params$Resource$Policies$Patch extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *policyId* parameter specifies a value that uniquely identifies the policy being updated.
     */
    policyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Policies$Update extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *policyId* parameter specifies a value that uniquely identifies the policy being updated.
     */
    policyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }

  export class Resource$Referenceconflicts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves information about the specified reference conflict.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.referenceConflicts.get({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *referenceConflictId* parameter specifies the YouTube reference conflict ID of the reference conflict being retrieved.
     *     referenceConflictId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "conflictingReferenceId": "my_conflictingReferenceId",
     *   //   "expiryTime": "my_expiryTime",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "matches": [],
     *   //   "originalReferenceId": "my_originalReferenceId",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Referenceconflicts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Referenceconflicts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReferenceConflict>;
    get(
      params: Params$Resource$Referenceconflicts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Referenceconflicts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReferenceConflict>,
      callback: BodyResponseCallback<Schema$ReferenceConflict>
    ): void;
    get(
      params: Params$Resource$Referenceconflicts$Get,
      callback: BodyResponseCallback<Schema$ReferenceConflict>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReferenceConflict>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Referenceconflicts$Get
        | BodyResponseCallback<Schema$ReferenceConflict>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReferenceConflict>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReferenceConflict>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReferenceConflict>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Referenceconflicts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Referenceconflicts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/youtube/partner/v1/referenceConflicts/{referenceConflictId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['referenceConflictId'],
        pathParams: ['referenceConflictId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReferenceConflict>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReferenceConflict>(parameters);
      }
    }

    /**
     * Retrieves a list of unresolved reference conflicts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.referenceConflicts.list({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Referenceconflicts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Referenceconflicts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReferenceConflictListResponse>;
    list(
      params: Params$Resource$Referenceconflicts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Referenceconflicts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReferenceConflictListResponse>,
      callback: BodyResponseCallback<Schema$ReferenceConflictListResponse>
    ): void;
    list(
      params: Params$Resource$Referenceconflicts$List,
      callback: BodyResponseCallback<Schema$ReferenceConflictListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ReferenceConflictListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Referenceconflicts$List
        | BodyResponseCallback<Schema$ReferenceConflictListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReferenceConflictListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReferenceConflictListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReferenceConflictListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Referenceconflicts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Referenceconflicts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/referenceConflicts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReferenceConflictListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReferenceConflictListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Referenceconflicts$Get
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *referenceConflictId* parameter specifies the YouTube reference conflict ID of the reference conflict being retrieved.
     */
    referenceConflictId?: string;
  }
  export interface Params$Resource$Referenceconflicts$List
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
  }

  export class Resource$References {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves information about the specified reference.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.references.get({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *referenceId* parameter specifies the YouTube reference ID of the reference being retrieved.
     *     referenceId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetId": "my_assetId",
     *   //   "audioswapEnabled": false,
     *   //   "claimId": "my_claimId",
     *   //   "contentType": "my_contentType",
     *   //   "duplicateLeader": "my_duplicateLeader",
     *   //   "excludedIntervals": [],
     *   //   "fpDirect": false,
     *   //   "gdataMedia": {},
     *   //   "hashCode": "my_hashCode",
     *   //   "id": "my_id",
     *   //   "ignoreFpMatch": false,
     *   //   "kind": "my_kind",
     *   //   "length": {},
     *   //   "mediaRequestInfo": {},
     *   //   "mediaResponseInfo": {},
     *   //   "origination": {},
     *   //   "status": "my_status",
     *   //   "statusReason": "my_statusReason",
     *   //   "urgent": false,
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$References$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$References$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reference>;
    get(
      params: Params$Resource$References$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$References$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Reference>,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    get(
      params: Params$Resource$References$Get,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    get(callback: BodyResponseCallback<Schema$Reference>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$References$Get
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reference> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$References$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$References$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/references/{referenceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reference>(parameters);
      }
    }

    /**
     * Creates a reference in one of the following ways: - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content. - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.references.insert({
     *     // The *claimId* parameter specifies the YouTube claim ID of an existing claim from which a reference should be created. (The claimed video is used as the reference content.)
     *     claimId: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetId": "my_assetId",
     *       //   "audioswapEnabled": false,
     *       //   "claimId": "my_claimId",
     *       //   "contentType": "my_contentType",
     *       //   "duplicateLeader": "my_duplicateLeader",
     *       //   "excludedIntervals": [],
     *       //   "fpDirect": false,
     *       //   "gdataMedia": {},
     *       //   "hashCode": "my_hashCode",
     *       //   "id": "my_id",
     *       //   "ignoreFpMatch": false,
     *       //   "kind": "my_kind",
     *       //   "length": {},
     *       //   "mediaRequestInfo": {},
     *       //   "mediaResponseInfo": {},
     *       //   "origination": {},
     *       //   "status": "my_status",
     *       //   "statusReason": "my_statusReason",
     *       //   "urgent": false,
     *       //   "videoId": "my_videoId"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetId": "my_assetId",
     *   //   "audioswapEnabled": false,
     *   //   "claimId": "my_claimId",
     *   //   "contentType": "my_contentType",
     *   //   "duplicateLeader": "my_duplicateLeader",
     *   //   "excludedIntervals": [],
     *   //   "fpDirect": false,
     *   //   "gdataMedia": {},
     *   //   "hashCode": "my_hashCode",
     *   //   "id": "my_id",
     *   //   "ignoreFpMatch": false,
     *   //   "kind": "my_kind",
     *   //   "length": {},
     *   //   "mediaRequestInfo": {},
     *   //   "mediaResponseInfo": {},
     *   //   "origination": {},
     *   //   "status": "my_status",
     *   //   "statusReason": "my_statusReason",
     *   //   "urgent": false,
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$References$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$References$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reference>;
    insert(
      params: Params$Resource$References$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$References$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Reference>,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    insert(
      params: Params$Resource$References$Insert,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Reference>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$References$Insert
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reference> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$References$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$References$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/references').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/partner/v1/references').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reference>(parameters);
      }
    }

    /**
     * Retrieves a list of references by ID or the list of references for the specified asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.references.list({
     *     // The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving references.
     *     assetId: 'placeholder-value',
     *     // The *id* parameter specifies a comma-separated list of YouTube reference IDs to retrieve.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$References$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$References$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReferenceListResponse>;
    list(
      params: Params$Resource$References$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$References$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReferenceListResponse>,
      callback: BodyResponseCallback<Schema$ReferenceListResponse>
    ): void;
    list(
      params: Params$Resource$References$List,
      callback: BodyResponseCallback<Schema$ReferenceListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ReferenceListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$References$List
        | BodyResponseCallback<Schema$ReferenceListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReferenceListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReferenceListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReferenceListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$References$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$References$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/references').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReferenceListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReferenceListResponse>(parameters);
      }
    }

    /**
     * Patches a reference.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.references.patch({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *referenceId* parameter specifies the YouTube reference ID of the reference being updated.
     *     referenceId: 'placeholder-value',
     *     // The *releaseClaims* parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
     *     releaseClaims: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetId": "my_assetId",
     *       //   "audioswapEnabled": false,
     *       //   "claimId": "my_claimId",
     *       //   "contentType": "my_contentType",
     *       //   "duplicateLeader": "my_duplicateLeader",
     *       //   "excludedIntervals": [],
     *       //   "fpDirect": false,
     *       //   "gdataMedia": {},
     *       //   "hashCode": "my_hashCode",
     *       //   "id": "my_id",
     *       //   "ignoreFpMatch": false,
     *       //   "kind": "my_kind",
     *       //   "length": {},
     *       //   "mediaRequestInfo": {},
     *       //   "mediaResponseInfo": {},
     *       //   "origination": {},
     *       //   "status": "my_status",
     *       //   "statusReason": "my_statusReason",
     *       //   "urgent": false,
     *       //   "videoId": "my_videoId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetId": "my_assetId",
     *   //   "audioswapEnabled": false,
     *   //   "claimId": "my_claimId",
     *   //   "contentType": "my_contentType",
     *   //   "duplicateLeader": "my_duplicateLeader",
     *   //   "excludedIntervals": [],
     *   //   "fpDirect": false,
     *   //   "gdataMedia": {},
     *   //   "hashCode": "my_hashCode",
     *   //   "id": "my_id",
     *   //   "ignoreFpMatch": false,
     *   //   "kind": "my_kind",
     *   //   "length": {},
     *   //   "mediaRequestInfo": {},
     *   //   "mediaResponseInfo": {},
     *   //   "origination": {},
     *   //   "status": "my_status",
     *   //   "statusReason": "my_statusReason",
     *   //   "urgent": false,
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$References$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$References$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reference>;
    patch(
      params: Params$Resource$References$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$References$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Reference>,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    patch(
      params: Params$Resource$References$Patch,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Reference>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$References$Patch
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reference> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$References$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$References$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/references/{referenceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reference>(parameters);
      }
    }

    /**
     * Updates a reference.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.references.update({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *referenceId* parameter specifies the YouTube reference ID of the reference being updated.
     *     referenceId: 'placeholder-value',
     *     // The *releaseClaims* parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
     *     releaseClaims: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetId": "my_assetId",
     *       //   "audioswapEnabled": false,
     *       //   "claimId": "my_claimId",
     *       //   "contentType": "my_contentType",
     *       //   "duplicateLeader": "my_duplicateLeader",
     *       //   "excludedIntervals": [],
     *       //   "fpDirect": false,
     *       //   "gdataMedia": {},
     *       //   "hashCode": "my_hashCode",
     *       //   "id": "my_id",
     *       //   "ignoreFpMatch": false,
     *       //   "kind": "my_kind",
     *       //   "length": {},
     *       //   "mediaRequestInfo": {},
     *       //   "mediaResponseInfo": {},
     *       //   "origination": {},
     *       //   "status": "my_status",
     *       //   "statusReason": "my_statusReason",
     *       //   "urgent": false,
     *       //   "videoId": "my_videoId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetId": "my_assetId",
     *   //   "audioswapEnabled": false,
     *   //   "claimId": "my_claimId",
     *   //   "contentType": "my_contentType",
     *   //   "duplicateLeader": "my_duplicateLeader",
     *   //   "excludedIntervals": [],
     *   //   "fpDirect": false,
     *   //   "gdataMedia": {},
     *   //   "hashCode": "my_hashCode",
     *   //   "id": "my_id",
     *   //   "ignoreFpMatch": false,
     *   //   "kind": "my_kind",
     *   //   "length": {},
     *   //   "mediaRequestInfo": {},
     *   //   "mediaResponseInfo": {},
     *   //   "origination": {},
     *   //   "status": "my_status",
     *   //   "statusReason": "my_statusReason",
     *   //   "urgent": false,
     *   //   "videoId": "my_videoId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$References$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$References$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reference>;
    update(
      params: Params$Resource$References$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$References$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Reference>,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    update(
      params: Params$Resource$References$Update,
      callback: BodyResponseCallback<Schema$Reference>
    ): void;
    update(callback: BodyResponseCallback<Schema$Reference>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$References$Update
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reference>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reference> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$References$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$References$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/references/{referenceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reference>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reference>(parameters);
      }
    }
  }

  export interface Params$Resource$References$Get extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *referenceId* parameter specifies the YouTube reference ID of the reference being retrieved.
     */
    referenceId?: string;
  }
  export interface Params$Resource$References$Insert
    extends StandardParameters {
    /**
     * The *claimId* parameter specifies the YouTube claim ID of an existing claim from which a reference should be created. (The claimed video is used as the reference content.)
     */
    claimId?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reference;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$References$List extends StandardParameters {
    /**
     * The *assetId* parameter specifies the YouTube asset ID of the asset for which you are retrieving references.
     */
    assetId?: string;
    /**
     * The *id* parameter specifies a comma-separated list of YouTube reference IDs to retrieve.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$References$Patch extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *referenceId* parameter specifies the YouTube reference ID of the reference being updated.
     */
    referenceId?: string;
    /**
     * The *releaseClaims* parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
     */
    releaseClaims?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reference;
  }
  export interface Params$Resource$References$Update
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *referenceId* parameter specifies the YouTube reference ID of the reference being updated.
     */
    referenceId?: string;
    /**
     * The *releaseClaims* parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
     */
    releaseClaims?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reference;
  }

  export class Resource$Spreadsheettemplate {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of spreadsheet templates for a content owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.spreadsheetTemplate.list({
     *     // The *locale* parameter identifies the desired language for templates in the API response. The value is a string that contains a BCP-47 language code. The default value is en.
     *     locale: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Spreadsheettemplate$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Spreadsheettemplate$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SpreadsheetTemplateListResponse>;
    list(
      params: Params$Resource$Spreadsheettemplate$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Spreadsheettemplate$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>,
      callback: BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>
    ): void;
    list(
      params: Params$Resource$Spreadsheettemplate$List,
      callback: BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Spreadsheettemplate$List
        | BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SpreadsheetTemplateListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheettemplate$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheettemplate$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/spreadsheetTemplate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SpreadsheetTemplateListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SpreadsheetTemplateListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Spreadsheettemplate$List
    extends StandardParameters {
    /**
     * The *locale* parameter identifies the desired language for templates in the API response. The value is a string that contains a BCP-47 language code. The default value is en.
     */
    locale?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Uploader {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of uploaders for a content owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.uploader.list({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Uploader$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Uploader$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploaderListResponse>;
    list(
      params: Params$Resource$Uploader$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Uploader$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploaderListResponse>,
      callback: BodyResponseCallback<Schema$UploaderListResponse>
    ): void;
    list(
      params: Params$Resource$Uploader$List,
      callback: BodyResponseCallback<Schema$UploaderListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$UploaderListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Uploader$List
        | BodyResponseCallback<Schema$UploaderListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploaderListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploaderListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploaderListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Uploader$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Uploader$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/uploader').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploaderListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploaderListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Uploader$List extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Validator {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Validate a metadata file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.validator.validate({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "content": "my_content",
     *       //   "kind": "my_kind",
     *       //   "locale": "my_locale",
     *       //   "uploaderName": "my_uploaderName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errors": [],
     *   //   "kind": "my_kind",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validate(
      params: Params$Resource$Validator$Validate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validate(
      params?: Params$Resource$Validator$Validate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ValidateResponse>;
    validate(
      params: Params$Resource$Validator$Validate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validate(
      params: Params$Resource$Validator$Validate,
      options: MethodOptions | BodyResponseCallback<Schema$ValidateResponse>,
      callback: BodyResponseCallback<Schema$ValidateResponse>
    ): void;
    validate(
      params: Params$Resource$Validator$Validate,
      callback: BodyResponseCallback<Schema$ValidateResponse>
    ): void;
    validate(callback: BodyResponseCallback<Schema$ValidateResponse>): void;
    validate(
      paramsOrCallback?:
        | Params$Resource$Validator$Validate
        | BodyResponseCallback<Schema$ValidateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValidateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValidateResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ValidateResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Validator$Validate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Validator$Validate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/validator').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ValidateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValidateResponse>(parameters);
      }
    }

    /**
     * Validate a metadata file asynchronously.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.validator.validateAsync({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "content": "my_content",
     *       //   "kind": "my_kind",
     *       //   "uploaderName": "my_uploaderName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "status": "my_status",
     *   //   "validationId": "my_validationId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validateAsync(
      params: Params$Resource$Validator$Validateasync,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validateAsync(
      params?: Params$Resource$Validator$Validateasync,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ValidateAsyncResponse>;
    validateAsync(
      params: Params$Resource$Validator$Validateasync,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validateAsync(
      params: Params$Resource$Validator$Validateasync,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ValidateAsyncResponse>,
      callback: BodyResponseCallback<Schema$ValidateAsyncResponse>
    ): void;
    validateAsync(
      params: Params$Resource$Validator$Validateasync,
      callback: BodyResponseCallback<Schema$ValidateAsyncResponse>
    ): void;
    validateAsync(
      callback: BodyResponseCallback<Schema$ValidateAsyncResponse>
    ): void;
    validateAsync(
      paramsOrCallback?:
        | Params$Resource$Validator$Validateasync
        | BodyResponseCallback<Schema$ValidateAsyncResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValidateAsyncResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValidateAsyncResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ValidateAsyncResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Validator$Validateasync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Validator$Validateasync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/validatorAsync').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ValidateAsyncResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValidateAsyncResponse>(parameters);
      }
    }

    /**
     * Get the asynchronous validation status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.validator.validateAsyncStatus({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "locale": "my_locale",
     *       //   "validationId": "my_validationId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errors": [],
     *   //   "isMetadataOnly": false,
     *   //   "kind": "my_kind",
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validateAsyncStatus(
      params: Params$Resource$Validator$Validateasyncstatus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validateAsyncStatus(
      params?: Params$Resource$Validator$Validateasyncstatus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ValidateStatusResponse>;
    validateAsyncStatus(
      params: Params$Resource$Validator$Validateasyncstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validateAsyncStatus(
      params: Params$Resource$Validator$Validateasyncstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ValidateStatusResponse>,
      callback: BodyResponseCallback<Schema$ValidateStatusResponse>
    ): void;
    validateAsyncStatus(
      params: Params$Resource$Validator$Validateasyncstatus,
      callback: BodyResponseCallback<Schema$ValidateStatusResponse>
    ): void;
    validateAsyncStatus(
      callback: BodyResponseCallback<Schema$ValidateStatusResponse>
    ): void;
    validateAsyncStatus(
      paramsOrCallback?:
        | Params$Resource$Validator$Validateasyncstatus
        | BodyResponseCallback<Schema$ValidateStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValidateStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValidateStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ValidateStatusResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Validator$Validateasyncstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Validator$Validateasyncstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/validatorAsyncStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ValidateStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValidateStatusResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Validator$Validate
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValidateRequest;
  }
  export interface Params$Resource$Validator$Validateasync
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValidateAsyncRequest;
  }
  export interface Params$Resource$Validator$Validateasyncstatus
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValidateStatusRequest;
  }

  export class Resource$Videoadvertisingoptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves advertising settings for the specified video.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.videoAdvertisingOptions.get({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *videoId* parameter specifies the YouTube video ID of the video for which you are retrieving advertising settings.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adBreaks": [],
     *   //   "adFormats": [],
     *   //   "autoGeneratedBreaks": false,
     *   //   "breakPosition": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "tpAdServerVideoId": "my_tpAdServerVideoId",
     *   //   "tpTargetingUrl": "my_tpTargetingUrl",
     *   //   "tpUrlParameters": "my_tpUrlParameters"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Videoadvertisingoptions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Videoadvertisingoptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoAdvertisingOption>;
    get(
      params: Params$Resource$Videoadvertisingoptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Videoadvertisingoptions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOption>,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOption>
    ): void;
    get(
      params: Params$Resource$Videoadvertisingoptions$Get,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOption>
    ): void;
    get(callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Videoadvertisingoptions$Get
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoAdvertisingOption>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videoadvertisingoptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoadvertisingoptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/videoAdvertisingOptions/{videoId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoAdvertisingOption>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoAdvertisingOption>(parameters);
      }
    }

    /**
     * Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.videoAdvertisingOptions.getEnabledAds({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *videoId* parameter specifies the YouTube video ID of the video for which you are retrieving advertising options.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adBreaks": [],
     *   //   "adsOnEmbeds": false,
     *   //   "countriesRestriction": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getEnabledAds(
      params: Params$Resource$Videoadvertisingoptions$Getenabledads,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEnabledAds(
      params?: Params$Resource$Videoadvertisingoptions$Getenabledads,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>;
    getEnabledAds(
      params: Params$Resource$Videoadvertisingoptions$Getenabledads,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEnabledAds(
      params: Params$Resource$Videoadvertisingoptions$Getenabledads,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>
    ): void;
    getEnabledAds(
      params: Params$Resource$Videoadvertisingoptions$Getenabledads,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>
    ): void;
    getEnabledAds(
      callback: BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>
    ): void;
    getEnabledAds(
      paramsOrCallback?:
        | Params$Resource$Videoadvertisingoptions$Getenabledads
        | BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videoadvertisingoptions$Getenabledads;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoadvertisingoptions$Getenabledads;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/youtube/partner/v1/videoAdvertisingOptions/{videoId}/getEnabledAds'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>(
          parameters
        );
      }
    }

    /**
     * Patches the advertising settings for the specified video.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.videoAdvertisingOptions.patch({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *videoId* parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
     *     videoId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adBreaks": [],
     *       //   "adFormats": [],
     *       //   "autoGeneratedBreaks": false,
     *       //   "breakPosition": [],
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "tpAdServerVideoId": "my_tpAdServerVideoId",
     *       //   "tpTargetingUrl": "my_tpTargetingUrl",
     *       //   "tpUrlParameters": "my_tpUrlParameters"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adBreaks": [],
     *   //   "adFormats": [],
     *   //   "autoGeneratedBreaks": false,
     *   //   "breakPosition": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "tpAdServerVideoId": "my_tpAdServerVideoId",
     *   //   "tpTargetingUrl": "my_tpTargetingUrl",
     *   //   "tpUrlParameters": "my_tpUrlParameters"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Videoadvertisingoptions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Videoadvertisingoptions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoAdvertisingOption>;
    patch(
      params: Params$Resource$Videoadvertisingoptions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Videoadvertisingoptions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOption>,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOption>
    ): void;
    patch(
      params: Params$Resource$Videoadvertisingoptions$Patch,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOption>
    ): void;
    patch(callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Videoadvertisingoptions$Patch
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoAdvertisingOption>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videoadvertisingoptions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoadvertisingoptions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/videoAdvertisingOptions/{videoId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoAdvertisingOption>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoAdvertisingOption>(parameters);
      }
    }

    /**
     * Updates the advertising settings for the specified video.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.videoAdvertisingOptions.update({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *videoId* parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
     *     videoId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adBreaks": [],
     *       //   "adFormats": [],
     *       //   "autoGeneratedBreaks": false,
     *       //   "breakPosition": [],
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "tpAdServerVideoId": "my_tpAdServerVideoId",
     *       //   "tpTargetingUrl": "my_tpTargetingUrl",
     *       //   "tpUrlParameters": "my_tpUrlParameters"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adBreaks": [],
     *   //   "adFormats": [],
     *   //   "autoGeneratedBreaks": false,
     *   //   "breakPosition": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "tpAdServerVideoId": "my_tpAdServerVideoId",
     *   //   "tpTargetingUrl": "my_tpTargetingUrl",
     *   //   "tpUrlParameters": "my_tpUrlParameters"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Videoadvertisingoptions$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Videoadvertisingoptions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoAdvertisingOption>;
    update(
      params: Params$Resource$Videoadvertisingoptions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Videoadvertisingoptions$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOption>,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOption>
    ): void;
    update(
      params: Params$Resource$Videoadvertisingoptions$Update,
      callback: BodyResponseCallback<Schema$VideoAdvertisingOption>
    ): void;
    update(callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Videoadvertisingoptions$Update
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoAdvertisingOption>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoAdvertisingOption>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videoadvertisingoptions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoadvertisingoptions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/youtube/partner/v1/videoAdvertisingOptions/{videoId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['videoId'],
        pathParams: ['videoId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoAdvertisingOption>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoAdvertisingOption>(parameters);
      }
    }
  }

  export interface Params$Resource$Videoadvertisingoptions$Get
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *videoId* parameter specifies the YouTube video ID of the video for which you are retrieving advertising settings.
     */
    videoId?: string;
  }
  export interface Params$Resource$Videoadvertisingoptions$Getenabledads
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *videoId* parameter specifies the YouTube video ID of the video for which you are retrieving advertising options.
     */
    videoId?: string;
  }
  export interface Params$Resource$Videoadvertisingoptions$Patch
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *videoId* parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
     */
    videoId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VideoAdvertisingOption;
  }
  export interface Params$Resource$Videoadvertisingoptions$Update
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *videoId* parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
     */
    videoId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VideoAdvertisingOption;
  }

  export class Resource$Whitelists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a whitelisted channel for a content owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.whitelists.delete({
     *     // The *id* parameter specifies the YouTube channel ID of the channel being removed from whitelist.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Whitelists$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Whitelists$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Whitelists$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Whitelists$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Whitelists$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Whitelists$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Whitelists$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Whitelists$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/whitelists/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Retrieves a specific whitelisted channel by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.whitelists.get({
     *     // The *id* parameter specifies the YouTube channel ID of the whitelisted channel being retrieved.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "title": "my_title"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Whitelists$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Whitelists$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Whitelist>;
    get(
      params: Params$Resource$Whitelists$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Whitelists$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Whitelist>,
      callback: BodyResponseCallback<Schema$Whitelist>
    ): void;
    get(
      params: Params$Resource$Whitelists$Get,
      callback: BodyResponseCallback<Schema$Whitelist>
    ): void;
    get(callback: BodyResponseCallback<Schema$Whitelist>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Whitelists$Get
        | BodyResponseCallback<Schema$Whitelist>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Whitelist>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Whitelist>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Whitelist> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Whitelists$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Whitelists$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/whitelists/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Whitelist>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Whitelist>(parameters);
      }
    }

    /**
     * Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.whitelists.insert({
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "title": "my_title"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "title": "my_title"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Whitelists$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Whitelists$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Whitelist>;
    insert(
      params: Params$Resource$Whitelists$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Whitelists$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Whitelist>,
      callback: BodyResponseCallback<Schema$Whitelist>
    ): void;
    insert(
      params: Params$Resource$Whitelists$Insert,
      callback: BodyResponseCallback<Schema$Whitelist>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Whitelist>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Whitelists$Insert
        | BodyResponseCallback<Schema$Whitelist>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Whitelist>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Whitelist>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Whitelist> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Whitelists$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Whitelists$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/whitelists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Whitelist>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Whitelist>(parameters);
      }
    }

    /**
     * Retrieves a list of whitelisted channels for a content owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtubePartner.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtubePartner = google.youtubePartner('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtubepartner'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtubePartner.whitelists.list({
     *     // The *id* parameter specifies a comma-separated list of YouTube channel IDs that identify the whitelisted channels you want to retrieve.
     *     id: 'placeholder-value',
     *     // The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Whitelists$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Whitelists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WhitelistListResponse>;
    list(
      params: Params$Resource$Whitelists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Whitelists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WhitelistListResponse>,
      callback: BodyResponseCallback<Schema$WhitelistListResponse>
    ): void;
    list(
      params: Params$Resource$Whitelists$List,
      callback: BodyResponseCallback<Schema$WhitelistListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$WhitelistListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Whitelists$List
        | BodyResponseCallback<Schema$WhitelistListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WhitelistListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WhitelistListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WhitelistListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Whitelists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Whitelists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/partner/v1/whitelists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WhitelistListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WhitelistListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Whitelists$Delete
    extends StandardParameters {
    /**
     * The *id* parameter specifies the YouTube channel ID of the channel being removed from whitelist.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Whitelists$Get extends StandardParameters {
    /**
     * The *id* parameter specifies the YouTube channel ID of the whitelisted channel being retrieved.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Whitelists$Insert
    extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Whitelist;
  }
  export interface Params$Resource$Whitelists$List extends StandardParameters {
    /**
     * The *id* parameter specifies a comma-separated list of YouTube channel IDs that identify the whitelisted channels you want to retrieve.
     */
    id?: string;
    /**
     * The *onBehalfOfContentOwner* parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of results.
     */
    pageToken?: string;
  }
}
