//import AxiosHeaders from "axios";
import DecisionRules from "@decisionrules/decisionrules"
import { HostEnum, SdkMode } from "@decisionrules/decisionrules/dist/defs/enums";
import { DecisionRulesOptions, SolverOptions } from "@decisionrules/decisionrules/dist/defs/models";

export const callRule = 
    async function callRule( ruleId, data )
    {
        const opt: DecisionRulesOptions = {
            solverKey: "vqrPD98Rz8-zS3LDp7XFJkh9qPTCMKcmN6LB5vD3TFstz9G6TyaSXOC5uYLgq_ls",
            managementKey: "A6JDuQGLLYkduo2bV-lp4Iq6-RVjhGD4wamon0ktbsv85fHfHHCK6PLK3aw4o1Z1",
            businessIntKey: "0DNSKn3Ds5GnSru_DWEUwTiQTdAt8ZFSC7rbHob3GXK8LozE1i88mc-yIE4bX1pi",
            host: HostEnum.GLOBAL_CLOUD,
            bi_host: HostEnum.GLOBAL_CLOUD
        };
     
        const solverOpt : SolverOptions = {
            cols: {
              includedConditionCols: ["TimeOfDay"],
              excludedConditionCols: []
            },
            debug: false,
            corrId: "mycorrId",
            strategy: "STANDARD",
            audit: true,
            auditTtl: "14"
          }
        try {
            const dr = new DecisionRules(opt);
        
        
            //console.log("calling rule : " + ruleId + "/" + data);
            const result = await dr.solve(ruleId, data);
            console.log("Rule called: " + result);
            return result;
        } catch (e) {
            console.log(e);
        }  
        
    }