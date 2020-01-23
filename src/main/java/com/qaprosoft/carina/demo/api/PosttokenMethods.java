
package com.qaprosoft.carina.demo.api;

import com.qaprosoft.carina.core.foundation.api.AbstractApiMethodV2;
import com.qaprosoft.carina.core.foundation.utils.Configuration;

public class PosttokenMethods extends AbstractApiMethodV2 {
    public PosttokenMethods() {
        super(null,null );
        replaceUrlPlaceholder("base_url", Configuration.getEnvArg("api_url"));
    }
}
//"api/uidpwd/rs.json"