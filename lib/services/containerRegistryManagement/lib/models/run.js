/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Run resource properties
 *
 * @extends models['ProxyResource']
 */
class Run extends models['ProxyResource'] {
  /**
   * Create a Run.
   * @property {string} [runId] The unique identifier for the run.
   * @property {string} [status] The current status of the run. Possible values
   * include: 'Queued', 'Started', 'Running', 'Succeeded', 'Failed',
   * 'Canceled', 'Error', 'Timeout'
   * @property {date} [lastUpdatedTime] The last updated time for the run.
   * @property {string} [runType] The type of run. Possible values include:
   * 'QuickBuild', 'QuickRun', 'AutoBuild', 'AutoRun'
   * @property {date} [createTime] The time the run was scheduled.
   * @property {date} [startTime] The time the run started.
   * @property {date} [finishTime] The time the run finished.
   * @property {array} [outputImages] The list of all images that were
   * generated from the run. This is applicable if the run generates base image
   * dependencies.
   * @property {string} [task] The task against which run was scheduled.
   * @property {object} [imageUpdateTrigger] The image update trigger that
   * caused the run. This is applicable if the task has base image trigger
   * configured.
   * @property {string} [imageUpdateTrigger.id] The unique ID of the trigger.
   * @property {date} [imageUpdateTrigger.timestamp] The timestamp when the
   * image update happened.
   * @property {array} [imageUpdateTrigger.images] The list of image updates
   * that caused the build.
   * @property {object} [sourceTrigger] The source trigger that caused the run.
   * @property {string} [sourceTrigger.id] The unique ID of the trigger.
   * @property {string} [sourceTrigger.eventType] The event type of the
   * trigger.
   * @property {string} [sourceTrigger.commitId] The unique ID that identifies
   * a commit.
   * @property {string} [sourceTrigger.pullRequestId] The unique ID that
   * identifies pull request.
   * @property {string} [sourceTrigger.repositoryUrl] The repository URL.
   * @property {string} [sourceTrigger.branchName] The branch name in the
   * repository.
   * @property {string} [sourceTrigger.providerType] The source control
   * provider type.
   * @property {boolean} [isArchiveEnabled] The value that indicates whether
   * archiving is enabled or not. Default value: false .
   * @property {object} [platform] The platform properties against which the
   * run will happen.
   * @property {string} [platform.os] The operating system type required for
   * the run. Possible values include: 'Windows', 'Linux'
   * @property {string} [platform.architecture] The OS architecture. Possible
   * values include: 'amd64', 'x86', 'arm'
   * @property {string} [platform.variant] Variant of the CPU. Possible values
   * include: 'v6', 'v7', 'v8'
   * @property {object} [agentConfiguration] The machine configuration of the
   * run agent.
   * @property {number} [agentConfiguration.cpu] The CPU configuration in terms
   * of number of cores required for the run.
   * @property {string} [provisioningState] The provisioning state of a run.
   * Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded',
   * 'Failed', 'Canceled'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Run
   *
   * @returns {object} metadata of Run
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Run',
      type: {
        name: 'Composite',
        className: 'Run',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          runId: {
            required: false,
            serializedName: 'properties.runId',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          lastUpdatedTime: {
            required: false,
            serializedName: 'properties.lastUpdatedTime',
            type: {
              name: 'DateTime'
            }
          },
          runType: {
            required: false,
            serializedName: 'properties.runType',
            type: {
              name: 'String'
            }
          },
          createTime: {
            required: false,
            serializedName: 'properties.createTime',
            type: {
              name: 'DateTime'
            }
          },
          startTime: {
            required: false,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          finishTime: {
            required: false,
            serializedName: 'properties.finishTime',
            type: {
              name: 'DateTime'
            }
          },
          outputImages: {
            required: false,
            serializedName: 'properties.outputImages',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageDescriptorElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageDescriptor'
                  }
              }
            }
          },
          task: {
            required: false,
            serializedName: 'properties.task',
            type: {
              name: 'String'
            }
          },
          imageUpdateTrigger: {
            required: false,
            serializedName: 'properties.imageUpdateTrigger',
            type: {
              name: 'Composite',
              className: 'ImageUpdateTrigger'
            }
          },
          sourceTrigger: {
            required: false,
            serializedName: 'properties.sourceTrigger',
            type: {
              name: 'Composite',
              className: 'SourceTriggerDescriptor'
            }
          },
          isArchiveEnabled: {
            required: false,
            serializedName: 'properties.isArchiveEnabled',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          platform: {
            required: false,
            serializedName: 'properties.platform',
            type: {
              name: 'Composite',
              className: 'PlatformProperties'
            }
          },
          agentConfiguration: {
            required: false,
            serializedName: 'properties.agentConfiguration',
            type: {
              name: 'Composite',
              className: 'AgentProperties'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Run;