/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { RequestBase } from '@_types/Base'
import { Ids } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Deletes an IP location database configuration.
 * @rest_spec_name ingest.delete_ip_location_database
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless visibility=private
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A comma-separated list of IP location database configurations to delete
     */
    id: Ids
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s */
    timeout?: Duration
  }
}
