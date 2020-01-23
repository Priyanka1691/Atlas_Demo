

package com.qaprosoft.carina.demo.api;

import com.qaprosoft.carina.core.foundation.api.AbstractApiMethodV2;
import com.qaprosoft.carina.core.foundation.utils.Configuration;

public class postcreateaccntMethods extends AbstractApiMethodV2 {
    public postcreateaccntMethods() {
        super("api/token/rq.json", "api/token/rs.json","api/token/token.properties");
        replaceUrlPlaceholder("base_url", Configuration.getEnvArg("api_url"));
    }
}