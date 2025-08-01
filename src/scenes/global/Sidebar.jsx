import { useState, Fragment } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const sidebarMenu = [
  {
    items: [
      {
        title: "Dashboard",
        to: "/",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },
  {
    section: "Data",
    items: [
      {
        title: "Manage Team",
        to: "/team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    section: "Pages",
    items: [
      {
        title: "Profile Form",
        to: "/form",
        icon: <PersonOutlinedIcon />,
      },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        title: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlineOutlinedIcon />,
      },
    ],
  },
  {
    section: "Charts",
    items: [
      {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlinedIcon />,
      },
      {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlinedIcon />,
      },
      {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />,
      },
      {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        height: "100vh",
        ".ps-sidebar-container": {
          backgroundColor: colors.primary[400],
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        },
        ".ps-menu-button": {
          color: colors.grey[100],
        },
        ".ps-menu-button:hover": {
          backgroundColor: colors.grey[700],
          color: "#868dfb",
        },
        ".ps-menu-button.ps-active": {
          backgroundColor: colors.grey[800],
          color: "#6870fa",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} breakPoint="md">
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={<MenuOutlinedIcon />}
            style={{ marginBottom: "10px", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>

        {!isCollapsed && (
          <Box mb="25px" textAlign="center">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              capamir
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              VIP Fancy Admin
            </Typography>
          </Box>
        )}

        <Menu>
          {sidebarMenu.map((section, idx) => (
            <Fragment key={idx}>
              {section.section && (
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  {section.section}
                </Typography>
              )}
              {section.items.map((item) => (
                <Item
                  key={item.title}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </Fragment>
          ))}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;
