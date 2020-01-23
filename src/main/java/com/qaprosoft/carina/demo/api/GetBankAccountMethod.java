
package com.qaprosoft.carina.demo.api;

import com.qaprosoft.carina.core.foundation.api.AbstractApiMethodV2;
import com.qaprosoft.carina.core.foundation.utils.Configuration;

import java.util.Properties;

public class GetBankAccountMethod extends AbstractApiMethodV2 {
    public GetBankAccountMethod(String userId) {
        super(null, "api/Getaccnt/rs.json", "api/Getaccnt/getaccunt.properties");
        replaceUrlPlaceholder("base_url", Configuration.getEnvArg("api_url"));
    }
}
