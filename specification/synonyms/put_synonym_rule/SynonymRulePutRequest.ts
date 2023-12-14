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
import { Id } from '@_types/common'
import { SynonymString } from '../_types/SynonymRule'

/**
 * Creates or updates a synonym rule in a synonym set
 * @rest_spec_name synonyms.put_synonym_rule
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The id of the synonym set to be updated with the synonym rule
     */
    set_id: Id

    /**
     * The id of the synonym rule to be updated or created
     */
    rule_id: Id
  }
  /**
   * The synonym rule information to update
   */
  body: {
    synonyms: SynonymString[]
  }
}
