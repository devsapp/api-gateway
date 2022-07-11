import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
import { InputProps } from '../../../common/entity';
export default class CreateApiGroups {
    private props;
    private AccessKeyID;
    private AccessKeySecret;
    constructor(inputs: InputProps);
    deploy(): Promise<void | $CloudAPI20160714.CreateApiGroupResponseBody>;
}
