import React ,{useState} from 'react';
import './App.css';
import { Outlet, useNavigate} from 'react-router-dom';
import { deepPurple } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'
import HistoryIcon from '@mui/icons-material/History';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FormatListNumberedSharpIcon from '@mui/icons-material/FormatListNumberedSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import Timer10SelectSharpIcon from '@mui/icons-material/Timer10SelectSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import BottomNavigation from '@mui/material/BottomNavigation'
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';

function App() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const nav = useNavigate()
  const rh = useMediaQuery(`min-height(690px)`)
  return (
    <>
      {/* // <div className="divAll"> */}
        <AppBar   style={{width: open? 'calc(100% - 88px)':'100%',backgroundColor:deepPurple[500],height:60}} >
          <Toolbar>
            <IconButton 
              aria-label="my_task" 
              onClick={()=>setOpen(true)}
              size='large'
              color='inherit'
              style={{display:!open? 'flex': 'none'}}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              My Task
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" anchor="left"  PaperProps={{sx: {backgroundColor: deepPurple[400],display:open? 'flex': 'none'}}}>
          
          
            <IconButton aria-label="close"  onClick={()=>setOpen(false)} style={{alignSelf: 'center', margin: 3 }}>
              <ChevronLeftSharpIcon style={{fontSize:40 }} />
            </IconButton>
            <Divider />
            <BottomNavigation value={value} onChange={()=>setOpen(false)} sx={{ flexDirection:'column',height:'90%',backgroundColor:deepPurple[400]  }} >
              
            <BottomNavigationAction label="Todo list" onClick={()=> {setValue('/todo-list') ;nav('/todo-list')}} value={'/todo-list'} icon={<FormatListNumberedSharpIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="Shop list" onClick={()=> {setValue('/shop');nav('/shop')}} value={'/shop'} icon={<InventorySharpIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="Chess timer" onClick={()=> {setValue('/chess-timer');nav('/chess-timer')}} value={'/chess-timer'} icon={<Timer10SelectSharpIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="Bank App" onClick={()=> {setValue('/bank-App');nav('/bank-App')}} value={'/bank-App'} icon={<AccountBalanceSharpIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="Bank App Styled" onClick={()=> {setValue('/bank-App-Styled');nav('/bank-App-Styled')}} value={'/bank-App-Styled'} icon={<AccountBalanceSharpIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="Bank App Jss" onClick={()=> {setValue('/bank-App-Jss');nav('/bank-App-Jss')}} value={'/bank-App-Jss'} icon={<AccountBalanceSharpIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="Bank App Telwin" onClick={()=> {setValue('/bank-App-Tel');nav('/bank-App-Tel')}} value={'/bank-App-Tel'} icon={<AccountBalanceSharpIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="History" onClick={()=> {setValue('/History');nav('/History')}} value={'/History'} icon={<HistoryIcon sx={{fontSize:'40px'}} />} />
            <Divider />
            <BottomNavigationAction label="History" onClick={()=> {setValue('/Sort');nav('/Sort')}} value={'/Sort'} icon={<ListAltIcon sx={{fontSize:'40px'}} />} />

            </BottomNavigation>
         
        </Drawer>
       
        <Outlet/>
        
      {/* // </div> */}
      </>
  );
}

export default App;
