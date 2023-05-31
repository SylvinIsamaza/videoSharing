import { AccountBox, DarkMode, ModeNight, PrivacyTip, UploadFile } from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';
import ShieldIcon from '@mui/icons-material/Shield';

    export const settingItems=[{
        
            name:"Account",
            icon:<AccountBox/>        
    },
    {
        name:'Download',
        icon:<UploadFile/>    }
    ,{
        name:"Languages",
        icon:<LanguageIcon/>
    },
    {
        name:"Theme",
        icon:<ModeNight/>   },
    {
        name:"Privacy",
        icon:<ShieldIcon/>    }
]