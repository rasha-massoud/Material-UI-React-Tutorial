import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: "Authentication",
        route: "",
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: "Database",
        route: "",
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: "Storage",
        route: "",
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: "Hosting",
        route: "",
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: "Functions",
        route: "",
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: "Machine Learning",
        route: "",
    }
]