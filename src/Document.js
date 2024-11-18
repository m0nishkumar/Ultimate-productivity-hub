import "react-vertical-timeline-component/style.min.css";
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import 'react-notifications/lib/notifications.css';
import journal from './grateful.png'
import book from './book-logo.png'
import quick from './quick-logo.png'
import { decrement, increment } from './counterSlice'
import food from './food-logo.png'
import axios from "axios";
import travel from './traveling-logo.png'
import travell from './travell.png'
import care from './self-care.png'
import ideaa from './ideaa.png'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Quill } from "react-quill";
import { startOfDay, endOfDay } from 'date-fns';
import { isWithinInterval } from 'date-fns';
import theme_1 from "./theme_3.png"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import theme_2 from "./theme_4.png"
import notebook from "./notebook.png"
import note1 from "./note1.png"
import note2 from "./note2.png"
import note3 from "./note3.png"
import note4 from "./note4.png"
import note6 from "./note6.png"
import {motion} from 'framer-motion'
import gift from './gift_logo.png'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import budget_logo from "./budget_logo.png"
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import Affirmation_logo from "./affirmation_logo.png"
import secret_logo from './secret_logo.png'
import vision_logo from './vision_logo.png'
import purpose_logo from "./purpose_logo3.png"
import spotify_logo from "./spotify_logo.png"
import goals_logo from './goals_logo.png'
import bg_grass from './bg_grass3.png'
import tree2 from './tree3.png'
import vtree from './tree7.png'
import vvtree from './vtree.png'
import bg_aff1 from './aff_bg.jpg'
// import dreamCar from './dream_car.png'
import SentenceFadeAnimation from "./SentenceFadeAnimation";
import purpose13 from './purpose14.png'
import goal12 from './goals_12.png'
import vision12 from './vision12.png'
import life12 from './life12.png'
import benzlogo from './benzlogo.png'
import dream_phy1 from './dream_phy1.png'
import Modal from "./Modal";
import Clock from "./Clock";
import sing from "./sing_gif.gif";
import Tracker from "./Tracker";
import Player from "./Player";
import TrackerHistory from './TrackerHistory'
import { Radar, RadarChart, PolarGrid,PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import "./quillcss.css";
import Countdown from "react-countdown";
import { Completionist } from "./Completionist";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { transition } from "d3";
import Rewards from "./Rewards";
import { useDispatch } from "react-redux";
import { Newsapi } from "./Newsapi";
import { Calculator } from "./Calculator";
import Basic from "./Basic";
import {Chatbot} from "./Chatbot";
import ModalCustomize from "./ModelCustomize";

export const Document = ({setSetup,setup,isOpenLogin,setIsOpenLogin,isOpen,setIsOpen,clock_events,setClock_events,setTimeset,timeset,setTimesetimg,timesetimg}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputValueCal, setInputValueCal] = useState('');
  const journall=[{"name":"Quick Guide","desc":"Follow the guide to record your day easily","color":"bg-white","image":quick,"button":"bg-black"},{"name":"Gratitude Diary","desc":"Express your gratitude and it will light up your day!","color":"bg-green-200","image":journal,"button":"bg-green-400"},{"name":"Self-Care Diary","desc":"Expressing emotions helps u slook into ourselves and move on.","color":"bg-orange-100","image":care,"button":"bg-orange-400"},{"name":"Learning Diary","desc":"Continuously learning, no matter what,nourishes our minds!","color":"bg-pink-200","image":book,"button":"bg-pink-400"},{"name":"Traveling Diary","desc":"Jump out of daily routines and get into another world!","color":"bg-cyan-100","image":travell,"button":"bg-cyan-400"},{"name":"Food Diary","desc":"Good food is good mood. Have yourself a great meal!","color":"bg-yellow-100","image":food,"button":"bg-yellow-400"}]
  const [value, setValue] = useState(new Date());
  const [Cal,setCal]=useState(false);
  const [valuee, setValuee] = useState(<h1>IM monish</h1>);
  const percentage = 20;
  const [list_change,setList_change]=useState(["tree-logo","calender-logo","startup-logo1","journal-3","notebook1","budget_logo","goals_logo","newsAPI"])
  const [startTimer, setStartTimer] = useState(false);
  const [create_list,setCreate_list]=useState(false);
  const [dream_carS,setDreamCar]=useState([{name:"Lambo",img:"dream_car1",logo:"lambo_pic",word:"LAMBO"},{name:"Benz",img:"dream_car3",logo:"benzlogo",word:"BENZ"},{name:"Buggati",img:"dream_car6",logo:"bugg_logo1",word:"BUGG"},{name:"Benz",img:"dream_car",logo:"benzlogo",word:"BENZ"}])
  const [weathered,setWeathered]=useState(10);
  const [grown,setGrown]=useState(25);
  const [income_expense,setIncome_expense]=useState(true);
  const [income,setIncome]=useState({RealEstate:50000,Stocks:80000,Rental:40000});
  const [expense,setExpense]=useState({Shopping:1000,food:1000,petrol:500});
  const [balance,setBalance]=useState(0);
  const [calender_events,setCalender]=useState([{name:"Washing Cloths",image:"",priority:"red"},{name:"Reading 10 pages",image:"",priority:"red"},{name:"Shopping",image:"",priority:"red"}])
  const [calendar_completed,setCalender_completed]=useState([{name:"Drawing",image:"",priority:"red"}])
  const [create_list_cal,set_create_cal]=useState(false)
  const [income_total,setIncome_total]=useState(0);
  const [expense_total,setExpense_total]=useState(0);
  const [aff_no,setAff_no]=useState(0);
  const [dreanmno,setDreamno]=useState(0); 
  const [timertree,setTimertree]=useState(45);
  const [Nametree,setNametree]=useState("Study");
  const [inputTree,setInputTree]=useState(false);
  const [subTaskDoc,setSubTaskDoc]=useState({id:1,time:[5,6],name:"Morning-routine",priority:"green",src:"morning-routine.png",routine:true,subTasks:["Affirmations"]});
  const [notes,setNotes]=useState([{name:"LinkedList",page:1,questions:"<h3><strong>1) What is Linkedin?</strong></h3><p>A linked list in Java is a dynamic data structure whose size increases as you add the elements and decreases as you remove the elements from the list. The elements in the linked list are stored in containers.</p><br><h3><strong>2) What type of memory allocation is referred for Linked lists?</strong></h3><p>Dynamic memory allocation is referred for Linked lists.</p><br> <h3><strong>3) Describe what is Node in link list? And name the types of Linked Lists?</strong></h3><p>Together (data + link) is referred as the Node. Types of Linked Lists are, Singly Linked List Doubly Linked List Multiply Linked List Circular Linked List</p><br><h3><strong>4) Mention what is Singly Linked list?</strong></h3><p>Singly Linked list are a type of data structure.  In a singly linked list, each node in the list stores the contents of the node and a reference or pointer to the next node in the list.  It does not store any reference or pointer to the previous node.</p><br>"},
  {name:"Graphs",page:10,questions:'<h3><strong>1) What is Graphs?</strong></h3><p>A linked list in Java is a dynamic data structure whose size increases as you add the elements and decreases as you remove the elements from the list.</p><br><h3><strong>2) What type of memory allocation is referred for Graphs?</strong></h3><p>Dynamic memory allocation is referred for Graphs.</p><br> <h3><strong>3) Describe what is Node in Graphs? And name the types of Graphs?</strong></h3><p>Together (data + link) is referred as the Node. Types of Linked Lists are, Singly Linked List Doubly Linked List Multiply Linked List Circular Linked List</p><br><h3><strong>4) Mention what is Singly Graphs?</strong></h3><p>Singly Linked list are a type of data structure.  In a singly linked list, each node in the list stores the contents of the node and a reference or pointer to the next node in the list.  It does not store any reference or pointer to the previous node.</p><br>'}]);
  const [noteno,setNotesno]=useState(0);
  const handleStartTimer = () => {
    setStartTimer(true);
    setTree(0);
  };
  useEffect(()=>{
    console.log(clock_events[timeset]);
    console.log(timesetimg);
    const a=clock_events.filter((i)=>i.src==timesetimg);
    if(timesetimg!=""){setTodo(a[0]?.subTasks)
      setSubTaskDoc(a[0]);
    }
  },[timeset,timesetimg]);
  const incrementAff=()=>{
    const a=affimation_list.length;
    setAff_no((aff_no+1)%a);
  }
  const incrementCar=()=>{
    const a=dream_carS.length;
    setDreamno((dreanmno+1)%a);
  }
  const decrementAff=()=>{
    const a=affimation_list.length;
    setAff_no((aff_no-1)%a);
  }
  useEffect(()=>{
    setSetup(0);
  },[])
  
  useEffect(()=>{
    const totalIncome = Object.values(income).reduce((total, value) => total + value, 0);

    // Calculate the total expenses
    const totalExpenses = Object.values(expense).reduce((total, value) => total + value, 0);

    setIncome_total(Object.values(income).reduce((total, value) => total + value, 0));

    // Calculate the total expenses
    setExpense_total(Object.values(expense).reduce((total, value) => total + value, 0));
    // Calculate the net income
    setBalance(totalIncome - totalExpenses);
  },[expense,income])
  const grownFunc = () => {
    console.log("innnnnnn");
    let temp=grown+1;
    setGrown(temp);
  };
  const weatheredFunc = () => {
    let temp=weathered+1;
    setWeathered(temp);
  };
  const handleEndTimer=()=>{
    setStartTimer(false);
    setTree(2)
  }
  const showSuccessNotification = (a) => {
    NotificationManager.success('Success message', `${a}`);
  };

  // Function to show an error notification
  const showErrorNotification = (n) => {
    NotificationManager.error('Error message', `${n}`, 5000, () => {
      alert('callback');
    });
  };

  const create_listt=()=>{
    let temp=!create_list;
    setCreate_list(temp);
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };
  const handleInputChangeCal = (event) => {
    setInputValueCal(event.target.value); 
  };
  const sentences = [
    'I can’t wait to have my benz.',
    'Every action I take is bringing me closer to my benz ',
    'I love the smell of a my benz',
    'I can’t wait to take my benz car everywhere',
    'Just 1200 days left for Car Delivery',
  ];
  const customStyles = {
    path: {
      // Replace "red" with your desired color
      stroke: '#E32636',
    },
    // You can also style the text inside the progress bar if needed
    text: {
      // Replace "red" with your desired color
      fill: 'grey',
    },
  };

  const [third,setThird]=useState(0);
  const [spotify,setSpotify]=useState(0);
  const [third_aff,setThird_aff]=useState(0);
  const [startup,setStartup]=useState([1,2]);
  const [bard,setBard]=useState([]);
  const [clockRoutine,setclockRoutine]=useState(0);
  const [notePages,setnotePages]=useState(false);
  const quillRef=useRef();
  const timeline=[{"label":"Morning Routine","time":[15,16]},{"time":[16,17]},{"time":[6,7]},{"time":[9,10]},{"time":[21,22]},{"time":[20,21]}]
  const [todo,setTodo]=useState(["Enjoy the morning","Wish People","Eat Fruits","Affirmation"]);
  const [completed,setcompleted]=useState([]);
  const [subP,setSubP]=useState(0);
  const [tick,setTick]=useState(0);
  const crossOver=useRef();
  const [affimation_list,setAffirmation_list]=useState([{name:"I am having a positive and inspiring impact on the people I come into contact with.",vid:"affimation_vid"},{name:"I am in the right place at the right time, doing the right thing",vid:"affimation_vid1"},{name:"You are loved just for being who you are, just for existing",vid:"affimation_vid2"}]);
  const [valueecal, setValueCal] = useState();
  const [dailer,setDailer]=useState();
  const [song,setSong]=useState([]);
  const [display, setDisplay] = useState(''); 
  const [input_tor,setInputtor]=useState('');
 // const [valueecal, setValueCal] = useState([new Date(2023, 5, 1), new Date(2023, 7, 25),value]);
  const [line,setLine]=useState(0);
  const [spotifyItem,setSpotifyItem]=useState([]);
  const goals=["By age 22, accumulate assets worth 50 lakhs rupees.","Generate an annual income of 6+ lakhs from my startup venture.","Earn an additional 3-4 lakhs annually from a profitable side hustle.","Secure a regular job that provides a consistent income of 12+ lakhs per year."]
  const [tree,setTree]=useState(0);
  const counttt =useSelector((state)=>state.counter.value)
  useEffect(()=>{
    setSubP(completed?.length/(todo?.length+completed?.length)*100)
    // axios.get("http://localhost:5000/index")
    // .then(({data})=>{
    //   console.log(data) 
    //   setStartup(data)
    // })
  },[])
  const formats = [
    'font','size',
    'bold','italic','underline','strike',
    'color','background',
    'script',
    'header','blockquote','code-block',
    'indent','list',
    'direction','align',
    'link','image','video','formula',
  ]
  const updateIE =()=>{
    if(income_expense){
      setIncome({...income,[input_tor]:parseInt(display)})
    }
    else{
      setExpense({...expense,[input_tor]:parseInt(display)})
    }
  }

  const client_id = '0018bd9582d14a5aa08b5e7424f8a9f4';
  const client_secret = '504bea78ed1f42a1848e48c5943da31e';
  
  const getAccessToken = async () => {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      {
        grant_type: 'client_credentials',
        client_id,
        client_secret,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  
    if (response.status === 200) {
      return response.data.access_token;
    } else {
      throw new Error('Failed to get access token');
    }
  };
  const bookmark=[1,2,3,4,10,75,95];
  const affim=(num)=>{
    if(num==0){
      setThird_aff(0)
    }
    else if(num==1){
      setThird_aff(1)
    }
    else{
      setThird_aff(2)
    }
  }
  const fetchSpotifyData = async (accessToken, endpoint) => {
    const response = await axios.get(
      endpoint,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch Spotify data');
    }
  };
  
  // Convert main() into a React function component called Main
  const Main = () => {
    // Declare a state variable called items and a setter function called setItems
    const [items, setItems] = useState([]);
  
    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
      const fetchData = async () => {
        const accessToken = await getAccessToken();
        const spotifyData = await fetchSpotifyData(accessToken, 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums');
  
        // Use setItems to update the state variable with the spotifyData.items array
        spotifyData.items.map((i)=>{
          if(i.name.length>10){
            i.name=i.name.slice(0, 10) + "...";
          }
        })
        setSpotifyItem(spotifyData.items);
        console.log(spotifyData.items);
      };
  
      fetchData();
    }, []);
  }
Main();

  const dataLine = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const trees=[tree2,vtree,vvtree];
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','red','black','pink'];
  const cx = 120;
  const cy = 200;
  const outerRadius = 80;

  const iconRadius = outerRadius + 40;
  const iconSize = 24;
  const iconAngle = 360 / 5;
    const [totalValue, setTotalValue] = useState(0);
    const [percentages, setPercentages] = useState([]);
  
    useEffect(() => {
      const sum = data.reduce((acc, entry) => acc + entry.value, 0);
      const percentageValues = data.map((entry) => ((entry.value / sum) * 100).toFixed(0));
      setTotalValue(sum);
      setPercentages(percentageValues);
    }, []);
  


  const OnBard=()=>{
    setLine(1)
    axios.post("/v1/chat/completions", {
      model: "meta-llama-3.1-8b-instruct",
      messages: [
        { role: "system", content: "give your result in the form of a single array ex:['a','b'] nothing else for all questions dont give anyting else other than arrays" },
        { role: "user", content: subTaskDoc?.name +"routine"}
      ],
      temperature: 0.7,
      max_tokens: -1,
      stream: false
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })    
    .then(({data})=>{
      console.log(data.choices[0].message.content) 
      setLine(0)
      const exerciseArray = JSON.parse(data.choices[0].message.content.replace(/'/g, '"').replace(/\n/g, '').replace(/,\s*$/, ''));
      setBard(exerciseArray)
      setTodo([...exerciseArray,...todo])
    })

    // axios.get("http://localhost:5000/bard")
    // .then(({data})=>{
    //   console.log(data) 
    //   setLine(0)
    //   setBard(data)
    //   setTodo([...data,...todo])
    // })
  }
  const dailerFunction=(num)=>{
    let temp;
    if(num==1){
       temp=(third+1)%7
    }else{
      temp=(third-1)%7
    }
    setThird(temp);
    console.log(dailer);
  }
  const todoDelete=(i)=>{
    setTodo( todo.filter((item) => item!=i))
  }
  const journal_questions=["<h3><strong>What makes you feel powerful 😏?</strong></h3> <br><br><br><br><br><br><h3><strong>What makes you feel calm 😌?</strong></h3><br><br><br><br><br><br> <h3><strong>What's a choice you can make this week based on your needs 🤔?</strong></h3>","<h3><strong>🌷Who or what do you want to express gratitude to?</strong></h3> <br><br><br><br><h3><strong>😍 Why do you feel thankful?</strong></h3><br><br><br><br> <h3><strong>💗Thanks to them, I feel...</strong></h3><br><br><br><br><h3><strong>🙆‍♀  How’s your feeling today?</strong></h3><br><br><br><br><h3><strong>💪  I will become more…</strong></h3>"]
  const journal_emotions=["<h3><strong>What made your day Happy 🤩?</strong></h3>","<h3><strong>What made your day Sad 😔?</strong></h3>","<h3><strong>What made your day Cool 😎?</strong></h3>","<h3><strong>What made your day Lovely😍?</strong></h3>","<h3><strong>Why are you confused 🤔?</strong></h3>","<h3><strong>What made your day fun filled 😂?</strong></h3>" ]
  useEffect(()=>{
    if(third==0 || third==1 || third==6 && third_aff==2 || third==5&&Cal==false || third==8){
    setSubP(completed?.length/(todo?.length+completed?.length)*100)
    const a=document.querySelector(".progress-bar5")
    a.style.width=`${completed?.length/(todo?.length+completed?.length)*100}%`
    }
  },[todo,completed,third,third_aff]);

  const onChange = useCallback(
    (val) => {
      setValue(val);
    },
    [setValue],
  );
  const buttonRef = useRef(null);
  const disabledDates = [
    new Date(2023, 5, 2), // January 1st
    new Date(2023, 5, 15), // January 15th
    new Date(2023, 5, 14),
    new Date(2023, 5, 17) 
  ];
  const isDisabled = (date) => {
    // disable dates that are in the array
    return disabledDates.some((d) => d.getTime() === date.getTime());
  };
  // const disabledDates = (date) => {
  //   // disable dates within January 1st and January 15th
  //   return isWithinInterval(date, {
  //     start: new Date(2023, 6, 1), // January 1st
  //     end: new Date(2023, 6, 15), // January 15th
  //   });
  // };
  const handleClick = (event,i,index) => {
    console.log(todo.length);
    if (event.detail === 2) {
      showSuccessNotification("Completed ToDo")
      setTick(index)
      // const a=document.querySelector(".todop")
      // a.style.textDecoration="line-through"
      // crossOver.current.style.textDecoration="line-through"

      setTimeout(() => {
        setTick(0)
        // a.style.textDecoration="none"
        // crossOver.current.style.textDecoration="none"
        setTodo( todo.filter((item) => item!=i))
        setcompleted([...completed,i])
        setSubP(completed.length/(todo.length+completed.length)*100)
      }, 600);
      console.log(todo.length);
      if(todo.length==1){
        setTimeout(()=>{
          setIsOpenLogin(true);
        },600)
        
      }

    }
  };

  const handleClick_cal = (event,i,index) => {
    console.log(calender_events.length);
    if (event.detail === 2) {
      showSuccessNotification("Completed ToDo")
      // setTick(index)
      // const a=document.querySelector(".todop")
      // a.style.textDecoration="line-through"
      // crossOver.current.style.textDecoration="line-through"

      setTimeout(() => {
        // setTick(0)
        // a.style.textDecoration="none"
        // crossOver.current.style.textDecoration="none"
        setCalender( calender_events.filter((item) => item.name!=i.name))
        setCalender_completed([...calendar_completed,i])
      }, 600);
      console.log(todo.length);
      if(calender_events.length==1){
        setTimeout(()=>{
          setIsOpenLogin(true);
        },600)
        
      }

    }
  };


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 0.3,
        type: "spring", // Use spring animation
        stiffness: 200, // Control the stiffness of the spring
        damping: 20,
      }
    }
  };
  const ToDocontainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        delay: 0.1,
        duration: 0.5,
        type: "spring", // Use spring animation
        stiffness: 200, // Control the stiffness of the spring
        damping: 20,
      }
    }
  };
  const circle = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type:"spring",

      }
    }
  };
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: -100, // Start from above the container
    },
    visible: {
      opacity: 1,
      y: 0, // End at the original position
      transition: {
        duration:1.2
      }
    },
  };
  const containerToDo = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        delay:0.1
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const itemToDo = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        duration:0.5
      }
    }
  };
 
  const addList=()=>{
    console.log(inputValue)
    if(inputValue){
      setTodo([...todo,inputValue])
    }
    
  }
  const addListCal=()=>{
    if(inputValueCal){
      setCalender([...calender_events,{name:inputValueCal,image:"",priority:"red"}])
    }
    
  }
useEffect(()=>{
  if(third==3){
  console.log('i fire once');
  const quill = quillRef.current?.getEditor();
  quill?.setText('')
  quill?.clipboard.dangerouslyPasteHTML(0, '<h3><strong>🌷Who or what do you want to express gratitude to?</strong></h3> <br><br><br><br><h3><strong>😍 Why do you feel thankful?</strong></h3><br><br><br><br> <h3><strong>💗Thanks to them, I feel...</strong></h3><br><br><br><br><h3><strong>🙆‍♀  How’s your feeling today?</strong></h3><br><br><br><br><h3><strong>💪  I will become more…</strong></h3>');
}else{
  const quill = quillRef.current?.getEditor();
  quill?.setText('')
  quill?.clipboard.dangerouslyPasteHTML(0, notes[noteno].questions);
}},[third,noteno])

const emotion_journal=(num)=>{
  console.log("yes yes")
  const quill = quillRef.current?.getEditor();
  quill?.setText('');
  if(num<=5){
    quill?.clipboard.dangerouslyPasteHTML(0, journal_emotions[num]);
  }else{
    quill?.clipboard.dangerouslyPasteHTML(0, journal_questions[6-num]);
  }
}
const showCustomNotification = () => {
  NotificationManager.custom(
    <div style={{ backgroundColor: 'purple', color: 'white' }}>
      <h1>Custom Notification</h1>
      <p>This is a custom notification.</p>
    </div>,
    'Custom', // Title
    5000, // Close after 5 seconds
  );
};
const buttonRefs = [
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null),useRef(null),useRef(null)
];
const handleClickk = (buttonIndex) => {
  // buttonRefs.map((i)=>{
  //   i.current.style.backgroundColor = "white";
  //   i.current.style.borderWidth ="2px";
  //   i.current.style.scale ="1";
  //   i.current.style.opacity ="0.8";
  // })
  // buttonRefs[buttonIndex].current.style.backgroundColor = "rgb(226 232 240)";
  // buttonRefs[buttonIndex].current.style.border = "3px solid rgb(203 213 225)";
  // buttonRefs[buttonIndex].current.style.scale ="1.2";
  // buttonRefs[buttonIndex].current.style.opacity ="1";
  setThird(buttonIndex);
};
// useEffect(()=>{
//   buttonRefs[0].current.style.backgroundColor = "rgb(226 232 240)";
//   buttonRefs[0].current.style.border = "3px solid rgb(203 213 225)";
//   buttonRefs[0].current.style.scale ="1.2";
//   buttonRefs[0].current.style.opacity ="1";
// },[])

const dispatch=useDispatch();
  return (
   <div className='flex flex-row justify-between items-start h-full mediaDoc'>
    <Rewards isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin}/>
     <NotificationContainer />
     <ModalCustomize list_change={list_change} setList_change={setList_change}/>
     {/* <button onClick={()=>dispatch(decrement())}>-</button>
     <p>{counttt}</p>
     <button onClick={()=>dispatch(increment())}>+</button> */}
    <div className="flex flex-col space-y-4  justify-center items-center absolute h-full m-auto right-2">
      {
        list_change.map((i,index)=>{
          return(
            <img  ref={buttonRefs[index]} onClick={() => handleClickk(index)} src={`./${list_change[index]}.png`} className="h-10 w-10 opacity-70 rounded-full  border-2 p-1"/>
          )
        })
      }

    {/* <img  ref={buttonRefs[1]} onClick={() => handleClickk(1)} src={`./${list_change[1]}.png`} className="h-10 w-10 opacity-70 rounded-full  border-2 p-1"/>
<img ref={buttonRefs[2]} onClick={() => handleClickk(2)} src={`./${list_change[2]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
<img ref={buttonRefs[3]} onClick={() => handleClickk(3)} src={`./${list_change[3]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
<img ref={buttonRefs[8]} onClick={() => handleClickk(8)} src={`./${list_change[7]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/> */}
    {/* <div className="flex flex-col items-center justify-center space-y-2 py-2">
      <svg onClick={()=>{
dailerFunction(0);
    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8 p-2 rounded-full bg-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
</svg>
      <img src={`./${list_change[third]}.png`} className="h-12 w-12"/>
      <svg onClick={()=>{
dailerFunction(1);
    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8 p-2 rounded-full bg-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

</div> */}

    {/* <img ref={buttonRefs[4]} onClick={() => handleClickk(4)}   src={`./${list_change[4]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    <img ref={buttonRefs[5]} onClick={() => handleClickk(5)}  src={`./${list_change[5]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    <img ref={buttonRefs[6]} onClick={() => handleClickk(6)}  src={`./${list_change[6]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    <img ref={buttonRefs[7]} onClick={() => handleClickk(7)}  src={spotify_logo} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/> */}
    
    </div>
    {/* <div className="fixed left-[96.5%] top-[93%] rounded-full shadow-xl  bg-black p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>
</div> */}
{(clockRoutine)?<div className="wrapper">
    <div class="center-line border-dashed border-2 border-gray-400">
      <a href="#" onClick={() => setIsOpen(true)} class="scroll-icon" ><i class="fas fa-caret-up" style={{
        backgroundColor:"red"
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white bg-black rounded-full -m-[0px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>
</i></a>
    </div>
{
  timeline.map((i,index)=>{
    return(
      <div className="row row-1" id={`section-${index+2}`} style={{
        transform:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"translateX(15px)":"translateX(0px)",marginLeft:"30px"
      }}>
      <section className='bg-slate-100 shadow border-l-[7px] border-red-500' >
      {
          (i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" className="w-6 h-6 icon"  style={{
          backgroundColor:(i.time[0]==(value.getHours()))? "white":"white",left:"-81px"
         }}>
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>:        <i className={`icon fas fa-paper-plane bg-white`}
        style={{
         backgroundColor:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))? "white":"white",left:"-66px"
        }}></i>
      }
        <h1 className="absolute top-[50%] -left-[108px] -translate-y-[50%] time text-black bg-white"style={{
        left:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"-127px":"-108px"
      }}>{i.time[0]}:00 - {i.time[1]}:00</h1>
        <div className="p-3">
        <div className='flex flex-row space-x-5'style={{
          fontFamily:"poppins"
        }}>
       <img src="./morning-routine.png" className='h-[100px]'/>

  <div className='flex flex-col justify-center'>
    <div className='flex flex-row space-x-2 items-center'>
    <h1 className='text-3xl font-[500]'>Morning Routine</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
</svg>

    </div>

<div className='flex flex-row space-x-4'>
<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>
<h1 className='text-gray-600'> 5:00 AM - 7:00 AM</h1>
</div>

<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>

<h1 className='text-gray-600'>0 / 5</h1>
</div>
</div>
</div>
       </div>
       <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className=" h-full w-[80%] bg-slate-800 rounded-lg progress-bar"></div>
</div>
<h1>80%</h1>
       </div>
       </div>
      </section>
    </div>
    )
  })
}
</div>:<motion.div  variants={container}
    initial="hidden"
    animate="visible" className="m-auto w-full relative h-full mediaNavi">
  <img src="java.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl top-[-30px] left-[20px] bg-slate-100"/>
  <img src="mongodb.png" className="h-16 w-16 rounded-full absolute top-[40%] left-[-30px] p-1 shadow-xl bg-slate-100"/>
  <img src="self-care.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl top-[90%] left-[10px] bg-slate-100"/>
  <img src="sapling1.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl top-[-70px] right-[70px] bg-slate-100"/>
  {/* <img src="nodejs.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl top-[-100px] right-[300px] bg-slate-100"/> */}
  <img src="tree-logo.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl top-[-110px] right-[300px] bg-slate-100"/>
  <img src="tailwind.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl bottom-[-110px] right-[310px] bg-slate-100"/>
  {/* <img src="tailwind.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl bottom-[-90px] right-[100px] bg-slate-100"/> */}
  <button onClick={() => setIsOpen(true)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="h-16 w-16 rounded-full absolute p-1 shadow-xl bottom-[-90px] right-[100px] text-gray-400 bg-slate-100">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg></button>

 <Clock setTimeset={setTimeset} timeset={timeset} setTimesetimg={setTimesetimg} timesetimg={timesetimg}/>
 </motion.div>}
 <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal 
    </Modal>
    
{/* small box */}
<h1 className=" hidden mediaShow">Your Current Event<span className="font-[600]"> (Forest App)</span></h1>

<div className="flex flex-row items-start space-x-5 mediaFlex">
<motion.div variants={fadeInVariants} initial="hidden"
    animate="visible" className={`w-[400px] h-[77vh] bg-slate-100 mediaNavi shadow mt-10 rounded-2xl relative overflow-scroll example`}
style={{
  padding:(third!=6)?"10px 15px":"0px"
}}>

{(third==3)?<div className="flex flex-col space-y-2">
<h1 className="text-lg ">Templates:</h1>
  <div className="flex flex-row space-x-1 p-3 px-4 rounded-lg bg-slate-200 shadow mb-2 gradd" style={{
          // backgroundImage:`url(${ideaa})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right"
        }}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
</svg>

    <p className="text-white">Create my Template</p>
  </div>{
    journall.map((i)=>{
      return(
        <div className={`p-2 px-4 rounded-xl space-y-2 flex flex-col shadow items-start justify-between ${i.color}  bg-image1`}
        style={{
          backgroundImage:`url(${i.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right"
        }} onClick={()=>{
          emotion_journal(6)
        }}>
          <p className="font-semibold">{i.name}</p>
          <p className="w-[75%] text-sm text-slate-600">{i.desc}</p>
          <button className={`px-2 ${i.button} rounded-lg text-white font-[500]`}>START</button>
        </div>
      )
    })
  }
</div>
:(third==6)?
<div>
<div className="flex flex-row items-center justify-between">
<div className="flex flex-row items-center space-x-2 pt-3 px-2">
  <img src={goals_logo} className="h-10 w-10"/>
  <p className="text-2xl font-semibold">My Vision Board</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
</svg>
</div>
<div className="mt-5  bg-white rounded-t-3xl shadow-xl">
  <div className="p-4 pb-2">
  <p className="text-lg">INSPIRATION</p>
  <p className="pt-2 rounded-t-3xl text-green-600">"Positive thoughts and the law of attraction work hand in hand. Think it, believe it, and watch it manifest."</p>
  </div>
<img src={bg_grass} className="w-full h-16 px-0"/>
</div>
<div className="bg-white shadow-xl p-4 pt-6  relative">
  <div>
    {/* <img src={gift} className="h-16 w-16 absolute left-[75%] top-[-30px] bg-red-500 p-2 shadow-2xl rounded-full"/> */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-[60px] w-[60px] absolute left-[75%] top-[-30px] bg-red-500 p-3 shadow-2xl rounded-full">
  <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
</svg>

  </div>
  <div className="flex flex-row justify-between items-center">
<div className="flex flex-row items-center space-x-5" onClick={()=>{
  affim(0);
}}>
  <img src={Affirmation_logo} className="h-12 w-12 rounded-full shadow p-1"/>
  <p className="text-lg font-[400]">Affirmation</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
</div>
<div className="w-[95%] h-[1px] m-auto my-2 bg-slate-300"></div>
<div className="flex flex-row justify-between items-center">
<div className="flex flex-row items-center space-x-5"onClick={()=>{
  affim(2);
}}>
<img src={purpose_logo} className="h-12 w-12 rounded-full shadow p-1"/>
  <p className="text-lg font-[400] ">Life Purpose</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
</div>
<div className="w-[95%] h-[0.5px] m-auto my-2 bg-slate-300"></div>
<div className="flex flex-row justify-between items-center">
<div className="flex flex-row items-center space-x-5">
<img src={secret_logo} className="h-12 w-12 rounded-full shadow p-1 bg-red-800"/>
  <p className="text-lg font-[400]">Secret</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
</div>
<div className="w-[95%] h-[0.5px] m-auto my-2 bg-slate-300"></div>
<div className="flex flex-row justify-between items-center">
<div className="flex flex-row items-center space-x-5"onClick={()=>{
  affim(1);
}}>
<img src={vision_logo} className="h-12 w-12 rounded-full shadow p-1 " style={{
  backgroundColor:"	#F88379"
}}/>
  <p className="text-lg font-[400]" style={{
    // color:"#F88379"
  }}>Vision Board</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
</div>

</div>
</div>
:(third==5&& Cal)?<div className="flex flex-col items-start justify-between h-full">
  <h1 className="font-semibold text-xl mb-4">Budget Calculator{(income_expense)?<span>(income)</span>:<span>(Expense)</span>}:</h1>
  <Calculator balance={balance} display={display} setDisplay={setDisplay}/>
  <div className="flex flex-row justify-between items-center w-full space-x-3">
    <input type="text" placeholder="Birthday Shopping 🤩" className="w-full h-10 line_input" value={input_tor} onChange={(e)=>{
      setInputtor(e.target.value)
    }}/>
  <div className="flex flex-row space-x-5 my-3">
    <button className="bg-green-500 text-white p-2 text-lg rounded-xl px-5" onClick={()=>{
      updateIE()
    }}>Update</button>
    {/* <button className="bg-red-500 text-white rounded-xl text-lg p-2 px-5">Cancel</button> */}
  </div>
  </div>
</div>:(third==4)?(notePages)?
<div className="h-full">
  <h1 className="text-lg font-semibold">Data Structures Pages,</h1>
  <div className="flex flex-col items-center justify-start mt-5 h-full">  
  <table>
  <tr>
    <th>Content's Title</th>
    <th>Page</th>

  </tr>
  <tr onClick={()=>
    {setNotesno(0)}}>
    <td className="flex flex-row items-center space-x-2"><p>Linked List</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
</svg>
 </td>
    <td>1</td>
  </tr>
  <tr onClick={()=>
    {setNotesno(1)}}>
    <td className="flex flex-row items-center space-x-2"><p>Graphs</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
</svg>
 </td>
    <td>10</td>
  </tr>
  <tr>
    <td>C++ Structures</td>
    <td>50</td>

  </tr>
  <tr>
    <td>LeetCode DSA</td>
    <td>55</td>

  </tr>
  <tr onClick={()=>
    {setNotesno(0)}}>
    <td className="flex flex-row items-center space-x-2"><p>Strings & Arrays</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
</svg>
 </td>
    <td>75</td>
  </tr>
  <tr>
    <td>Stacks & Queue</td>
    <td>80</td>
  </tr>
  <tr>
    <td>Asymptotic analysis (Big-O notation)</td>
    <td>90</td>
  </tr>
  <tr onClick={()=>
    {setNotesno(0)}}>
    <td className="flex flex-row items-center space-x-2"><p>Basic Recursion</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
</svg>
 </td>
    <td>95</td>
  </tr>
  <tr>
    <td>Greedy Algorithms</td>
    <td>110</td>

  </tr>
</table></div>
<div className='absolute  right-2 bottom-2 shadow-xl bg-red-500 text-white p-3 rounded-full z-50'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
</svg>
</div>
</div>:
<div className="relative">
<div className='absolute  right-2 bottom-2 shadow-xl bg-red-500 text-white p-3 rounded-full z-50'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
</svg>
</div>
<div className="flex flex-row justify-between items-center">
  <div className="flex flex-row space-x-2 items-center">
<img src="notebook1.png" className="h-10 w-10"/>
<h1 className="text-lg">Notebooks</h1>
</div>
<div className="flex flex-row space-x-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</div>
</div>
<div className="w-[80%] m-auto h-[1px] bg-slate-500 mt-1"></div>
<div className="flex flex-row flex-wrap">
  <div className="flex flex-col items-center"onClick={()=>{
    setnotePages(true)
  }}>
  <img src={note1} className="h-[170px] w-[170px]"/>
  <p className="p-0">Data Structures</p>
  </div>
  <div className="flex flex-col items-center" onClick={()=>{
    setnotePages(true)
  }}>
  <img src={note2} className="h-[170px] w-[170px]"/>
  <p className="p-0">Networking</p>
  </div>
  <div className="flex flex-col items-center"onClick={()=>{
    setnotePages(true)
  }}>
  <img src={note3} className="h-[170px] w-[170px]"/>
  <p className="p-0">Python</p>
  </div>
  <div className="flex flex-col items-center"onClick={()=>{
    setnotePages(true)
  }}>
  <img src={note6} className="h-[170px] w-[170px]"/>
  <p className="p-0">Notes</p>
  </div>
  <div className="flex flex-col items-center"onClick={()=>{
    setnotePages(true)
  }}>
  <img src={note4} className="h-[170px] w-[170px]"/>
  <p className="p-0">Data Science</p>
  </div>

</div>
</div>:(spotify==1)?
<div>
<div>
  <div className="flex flex-row items-center justify-between">
    <div className="flex flex-row items-center space-x-2">
    <img src={spotify_logo} className="h-9 w-9"/>
    <h1 className="text-xl font-semibold">Spotify</h1>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

  </div>
  <div className="flex flex-row items-center justify-between flex-wrap mt-2">
    <div className="flex flex-row items-center justify-between w-full">

    <div className="flex flex-col items-center space-y-2">
    <h1 className="text-[20px] font_gra font-semibold">Listen, Sing, Focus 🎶</h1>
    <div className="flex flex-row items-center justify-around w-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

    <div className=" flex flex-row items-center space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 z-10 text-red-600 opacity-90">
  <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 z-10  text-red-600">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 z-10 opacity-90 text-red-600">
  <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
</svg>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

</div>
    </div>
    <img src={sing} className="w-[110px] shadow rounded-full"/>
</div>
<h1 className="w-full my-3 mb-1 font-semibold text-lg">Recently Played <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
</h1>
<TrackerHistory track={spotifyItem}/>
<h1 className="w-full my-3 mb-1 text-lg font-semibold">Recommended songs <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
</h1>
<Tracker track={spotifyItem}/>
<Player/>
        </div>

    </div>
</div>:<div >
  <motion.div variants={ToDocontainer}
    initial="hidden"
    animate="visible">
      <div>
    <motion.div  className='flex flex-row space-x-2 items-center'>
    <img src={`${subTaskDoc?.src}`} className='h-10 w-10 bg-white rounded-full p-1'/>
    <motion.h1 className='text-2xl font-[500]' >{subTaskDoc?.name}</motion.h1>
    </motion.div>
    <motion.div  className='flex flex-row space-x-5 p-2 py-1'>
      <div className='flex flex-row space-x-1'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>
<h1 className='text-gray-600'>0/{subTaskDoc?.subTasks.length}</h1>
    </div>
    <h1 className='text-red-500'>Reset Everyday</h1>
  </motion.div>
  <motion.p  className='text-gray-500'>Balance your mental health- Research has proven that those who wake up early have shown better mental health symptoms.</motion.p>
  <motion.div  className='flex flex-col space-y-2 my-2'>
    <div className='flex flex-row justify-between'>
      <p>Progress</p>
      <p className='text-red-500'>{subP.toFixed(1)}%</p>  
    </div>

    <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg progress-bar progress-bar5`} ></div>
</div>
       </div>
  </motion.div>
  </div>
{(create_list)?
  <motion.div  className="flex flex-row items-center justify-center space-x-2 pt-1">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

  <input type="text" id="fname" name="fname"    value={inputValue} // Bind the input value to the state
        onChange={handleInputChange} placeholder="Pen down your task...."  style={{
    borderBottom:"1px solid gray"
  }}></input>
 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
      <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg"  onClick={()=>{
      addList();
showSuccessNotification("Created ToDo")
    }} viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>

  </motion.div>:<div></div>}
<div className='w-full h-[1px] bg-gray-300 my-3'></div>
<motion.div variants={containerToDo}
    initial="hidden"
    animate="visible">
<motion.div  className="flex flex-row justify-between items-center">
<h1 className='py-1'>{subTaskDoc?.name}'s Todo</h1>
<div className="flex flex-row items-start space-x-1">
  <img src="./bard-ai.png"className="w-10 h-7" onClick={OnBard}/>
  <div className=' bg-red-500 text-white p-1 rounded-full 'onClick={create_listt}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
</svg>
</div>
</div>
</motion.div>

<motion.div  variants={containerToDo}
    initial="hidden"
    animate="visible"  className='flex flex-col space-y-2'>
  {
    todo.map((i,index)=>{
      return(
        <motion.div variants={itemToDo} className='flex flex-row justify-between border-2 todocss items-center p-[5px] rounded-lg bardcss border-slate-200 todo'onClick={(event)=>{
          handleClick(event,i,index+1)
        }}>
        <div className='flex flex-row space-x-3 items-center todo1'>
        {
          (tick && (tick==index+1))?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        :<img src="https://www.giraffecvs.co.uk/wp-content/uploads/2013/09/target.png" className="p-1 bg-white h-10 w-10 rounded-full"/>
        }
        <p className='todop' ref={crossOver}>{i}</p>
        </div>
        <div className="flex flex-row space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6" onClick={()=>{
          todoDelete(i)
          showErrorNotification("Deleted ToDO");
        }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
      <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
    </svg>
    
    </div>
      </motion.div>
      )
    })
  }
  {
    (line)? <h1 className="m-auto text-sm">Creating your todo list....</h1>:<></>
  }
 

</motion.div>
</motion.div>
<div className='w-full h-[0.5px] bg-gray-300 my-3'></div>
 <motion.div >
<h1 className="mt-2">Completed</h1>
<motion.div
variants={containerToDo}
 className='flex flex-col space-y-2'>

  {completed.map((i)=>{
    return(
      <motion.div
      variants={itemToDo}
       className='flex flex-row justify-between border-2 items-center p-[5px] rounded-lg bardcss opacity-[0.85] line-through border-slate-200'>
      <div className='flex flex-row space-x-3 items-center'>
      <img src="https://www.giraffecvs.co.uk/wp-content/uploads/2013/09/target.png" className="p-2 bg-white h-10 w-10 rounded-full"/>
      <p className="text-gray-600">{i}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
    <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
  </svg>
    </motion.div>
    )
  })}
</motion.div>
</motion.div>
  </motion.div>
  </div>}
</motion.div>
<div>
  {/* 85vh */}
{(third==3)&&<div className='w-[400px] h-[600px] bg-slate-100 rounded-2xl mt-10 shadow p-2 relative themes'>
<img src="journal-3.png" className="h-20 w-20 z-20 absolute -top-8 -left-3"/>
  <div className="quill1">
  <div className="font-[500] text-lg flex flex-row justify-between items-center mb-1" style={{
    fontFamily:"poppins"
  }}><div className="inline ml-10">~{(value.toLocaleDateString()).slice(0,2)}{(value.toLocaleDateString()).slice(2)}</div>

    <img src="./cool.png" className="w-8 h-8 p-1 bg-white rounded-full"/>
    </div>
<ReactQuill theme="snow" style={{

}} value={valuee} onChange={setValuee} ref={quillRef} className="quillbro border-[1px] w-[100%] border-gray-200 bg-white"/>
<div className="flex flex-row items-center justify-center m-1 z-20 absolute left-10">

  <div className="flex flex-row space-x-6">
    <img src="cool.png" className="h-8 w-8" onClick={()=>{
      emotion_journal(2)
    }}/>
    <img src="emoji.png" className="h-8 w-8"onClick={()=>{
      emotion_journal(3)
    }}/>
    <img src="em.png" className="h-8 w-8"onClick={()=>{
      emotion_journal(5)
    }}/>
    <img src="star.png" className="h-8 w-8"onClick={()=>{
      emotion_journal(0)
    }}/>
    <img src="thinking.png" className="h-8 w-8"onClick={()=>{
      emotion_journal(4)
    }}/>
    <img src="sad.png" className="h-8 w-8"onClick={()=>{
      emotion_journal(1)
    }}/>
  </div>
</div>
</div>
</div>}

{(third==4)&&<div className='w-[400px] h-[600px] bg-slate-100 rounded-2xl mt-10 shadow p-2 relative'>
<img src="journal-3.png" className="h-20 w-20 z-20 absolute -top-8 -left-3"/>
  <div className="relative">
  <div className="font-[500] text-lg flex flex-row justify-between items-center mb-1" style={{
    fontFamily:"poppins"
  }}><div className="inline ml-10">{notes[noteno].name}</div>
<div className="text-sm">~({notes[noteno].page}/365)</div>
    </div>
<ReactQuill theme="snow" value={valuee} onChange={setValuee} ref={quillRef} style={{
  // backgroundImage: `url(${theme_2})`,
  backgroundColor:"white",
  height:"500px",
  backgroundSize:"cover"
}}/>
<div className="flex flex-row justify-around m-2">
{
  bookmark.map((i)=>{
    return(
      <div className="flex flex-col items-center w-10 m-auto rounded-lg text-white bg-black"style={{
        backgroundColor:"	#343434"
      }}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
</svg>
<p className="text-sm">{i}</p>
      </div>
    )
  })

}
<div></div>
</div>
</div>
</div>}

{(third==1)&&<motion.div   variants={fadeInVariants}
      initial="hidden"
      animate="visible"><div className='w-[400px] h-fit bg-slate-100 rounded-2xl shadow mt-10 relative'>
  <img src="calender-logo.png" className="h-16 w-16 z-20 absolute -top-5 -left-3"/>
<div className='absolute right-2 bottom-2 shadow-xl bg-red-500 text-white p-3 rounded-full z-50' onClick={()=>{
  set_create_cal(!create_list_cal)
}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
</svg>
</div>
{/* <div className='absolute right-2 bottom-2 shadow-xl p-3 rounded-full z-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[220px] h-[220px] z-0 absolute -bottom-5 -right-2 text-gray-100 opacity-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg></div> */}
<div className="flex flex-row justify-around items-center py-3">
<div className="flex flex-col items-center space-y-4">
<img src="java.png" className="h-8 w-8 rounded-full shadow p-1  bg-white"/>
  <img src="mongodb.png" className="h-8 w-8 rounded-full p-1 shadow  bg-white"/>
  <img src="self-care.png" className="h-8 w-8 rounded-full shadow p-1 bg-white"/>
  <img src="sapling1.png" className="h-8 w-8 rounded-full  p-1 shadow  bg-white"/>

</div>
  <div className=" shadow-lg"><Calendar isDisabled={isDisabled} size={290} fontSize={20} isRangeSelector value={valueecal} onChange={onChange} todayMarker={true} /></div>
  <div className="flex flex-col items-center space-y-4">
  <img src="nodejs.png" className="h-8 w-8 rounded-full shadow p-1  bg-white"/>
  <img src="tree-logo.png" className="h-8 w-8 rounded-full p-1 shadow  bg-white"/>
  <img src="tailwind.png" className="h-8 w-8 rounded-full  p-1 shadow   bg-white"/>
  <button onClick={() => setIsOpen(true)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="h-8 w-8 rounded-full p-1  text-gray-400 bg-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg></button>
</div>

  </div>
{/* <div className='w-full h-[1px] bg-gray-300 my-3'></div> */}
<div className=" bg-slate-200 overflow-y-scroll shadow grad px-5 py-2 rounded-t-3xl rounded-b-2xl h-[290px] relative shadow-xl overflow-scroll example" style={{
  backgroundColor:"white"
}}>
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[220px] h-[220px] z-0 absolute bottom-0 -right-2 opacity-[0.6] text-slate-100">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg> */}
<div className="flex flex-row justify-between items-center py-2 pt-1">
  <div className="flex flex-row items-center space-x-1">
  
<h1 className="text-lg">Today's Todo</h1>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
</svg>
</div>
<div className="flex flex-row items-center">
{/* <img src="./bard-ai.png"className="w-10 h-7" onClick={OnBard}/> */}
<div className="h-9 w-9">
  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={customStyles} />;
  </div>
  </div>
</div>
{(create_list_cal)?
  <motion.div  className="flex flex-row items-center justify-center space-x-2 pb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

  <input type="text" id="fname" name="fname"  value={inputValueCal} // Bind the input value to the state
        onChange={handleInputChangeCal} placeholder="Pen down your task...."  style={{
    borderBottom:"1px solid gray",backgroundColor:"transparent"
  }}></input>
 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
      <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg"  onClick={()=>{
      addListCal();
showSuccessNotification("Created ToDo")
    }} viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>

  </motion.div>:<div></div>}
<div className='flex flex-col space-y-2'>

  
{
    calender_events.map((i,index)=>{
      return(
        (index==0)?
        <div className='flex flex-row justify-between shadow_bottom_box  items-center p-[5px] rounded-lg bg-red-500 scale-[104%] z-10 shadow-lg'onClick={(event)=>{
          handleClick_cal(event,i,index+1)
        }}>
        <div className='flex flex-row space-x-3 items-center'>
        <img src="https://www.giraffecvs.co.uk/wp-content/uploads/2013/09/target.png" className=" bg-white h-10 w-10 shadow p-1  border-gray-300 rounded-full"/>
        <p className='text-white'>{i.name}</p>
        </div>
        <div className="flex flex-row space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800" onClick={()=>{
              
            }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
    
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-800">
          <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
        </svg>
        
        </div>
      </div>:  <div onClick={(event)=>{
          handleClick_cal(event,i,index+1)
        }} className='flex flex-row justify-between border-2 items-center p-[5px] rounded-lg z-10'>
    <div className='flex flex-row space-x-3 items-center'>

      <img src="https://www.giraffecvs.co.uk/wp-content/uploads/2013/09/target.png"className=" bg-white h-10 w-10 rounded-full border-2 border-slate-100 p-1"/>

    <p className=''>{i.name}</p>
    </div>
    <div className="flex flex-row space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6" onClick={()=>{

        }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
      <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
    </svg>
    
    </div>
  </div>
      )
    })
  }



</div>
<div className="mt-4">
  <div className="flex flex-row space-x-1 items-center mb-2">
  <h1 className="text-[17px]">Completed</h1>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
</svg>
  </div>
</div>

<div className='flex flex-col space-y-2'>
{
  calendar_completed.map((i)=>{
    return(
      <div className='flex flex-row justify-between border-2 items-center p-[5px] rounded-lg bardcss opacity-[0.85] line-through border-slate-200'>
      <div className='flex flex-row space-x-3 items-center'>
      <img src="https://www.giraffecvs.co.uk/wp-content/uploads/2013/09/target.png" className="p-1 bg-white h-10 w-10 rounded-full"/>
      <p className="text-gray-600">{i.name}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
    <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
  </svg>
    </div>
    )
  })
}
</div>
</div>
</div></motion.div>}

{(third==0)&&<motion.div variants={fadeInVariants}
      initial="hidden"
      animate="visible" className='w-[400px] h-fit py-5 bg-slate-100 rounded-2xl shadow mt-10 relative'><motion.div variants={containerToDo}
    initial="hidden"
    animate="visible">
  <motion.img variants={item} src="tree-logo.png" className="h-16 w-16 z-20 absolute -top-5 -left-3"/>
  <motion.div variants={item} className=" z-20 absolute top-0 right-3 flex flex-row items-center">
  <img className="h-10 w-10"src="coin-logo.png" />
  <p className="text-lg">10</p>
  </motion.div>
<div className="flex flex-col justify items-center w-full space-y-3" style={{
  fontFamily:'poppins'
}}>
  <motion.p variants={item} className="text-xl font-[500]">Start planting today!</motion.p>
  <motion.div variants={circle}>
    <CountdownCircleTimer
   key={(startTimer)?true:false}
    isPlaying={(startTimer)?true:false}
    duration={2700}
    colors={["#355E3B","#228B22"]}
    colorsTime={[120,5]}
    size={215}
    onComplete={() => {

    }}
  >
    {({ remainingTime }) => <img className="rounded-full" src={trees[tree]} />}
  </CountdownCircleTimer></motion.div>
  <motion.div variants={item} onClick={()=>{
    setInputTree(!inputTree);
  }} className="flex flex-row space-x-[5px] bg-gray-100 items-center shadow justify-center w-fit px-2 rounded-lg">
  <div className="h-3 w-3 rounded-full bg-red-600"></div>
  <p>{Nametree}</p>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</motion.div>
  <motion.div variants={item}>
  {startTimer ? (
        <Countdown
          date={Date.now() + timertree*60000}
          renderer={({ hours, minutes, seconds, completed }) => {
            if (completed) {
              setTree(1);
              grownFunc();
              setStartTimer(false);
              return <Completionist />;
            } else {
              return (
                <span className="text-[90px]">
                  {minutes}:{seconds}
                </span>
              );
            }
          }}
        />):<h1 className="text-[90px]">45:00</h1>}
  </motion.div>
  {(inputTree)?
  <div className="flex flex-row w-full justify-around items-end space-x-2 px-3">
    <input type="text" className="line_input1 p-1" placeholder="Focus time..." value={timertree} onChange={(e)=>{
setTimertree(e.target.value)
    }}/>
    <img src="tree-logo.png" className="h-12 w-12"/>
    <input type="text" className="line_input1 p-1" placeholder="Focus name..."value={Nametree} onChange={(e)=>{
 setNametree(e.target.value)     
    }}/>
  </div>:<div></div>}
  <motion.div variants={item} className="flex flex-row justify-around w-full items-center">
    <div className="flex flex-row space-x-1 items-center bg-green-700 rounded-lg px-2 shadow">
      <img src="count-tree.png"className="w-16 h-16"/>
      <p className="text-xl text-white">{grown}</p>
    </div>
<div className="flex flex-col space-y-3">

{(!startTimer)?<button onClick={handleStartTimer} className="rounded-lg bg-green-500 p-1 pr-4 text-white text-lg shadow flex flex-row items-center border-b-4 border-green-900">
  <img src="sapling1.png" className="h-8 w-8"/>
  <p>Plant</p>
</button>:<button onClick={()=>{
  handleEndTimer();
  weatheredFunc();
}} className="rounded-lg bg-red-600 p-1 pr-4 text-white text-lg shadow flex flex-row items-center border-b-4 border-red-900">
  <img src="sapling1.png" className="h-8 w-8"/>
  <p>Give up</p>
</button>}
</div>
<div className="flex flex-row space-x-1 items-center border-2 px-2 rounded-lg border-black">
      <img src="count-dry.png" className="w-16 h-16"/>
      <p className="text-xl">{weathered}</p>
    </div>
</motion.div>
<motion.div variants={item} className="flex flex-row px-5 space-x-1">
  <p className="text-sm text-slate-800">Tips:</p>
  <p className="text-sm text-slate-500">By creating time block frames in your workday schedule.</p>
</motion.div>
</div>
</motion.div></motion.div>}
{(third==7)&&<div className='w-[400px] h-[86vh] p-2 overflow-scroll bg-slate-100 rounded-2xl shadow mt-10 relative'>
  <Newsapi/>
  </div>}
{(third==2)&&<div className='w-[400px] h-fit bg-slate-100 rounded-2xl shadow mt-10 relative'>
  <div className="flex flex-col justify-center items-center text-2xl font-[500] py-2"><p>Today's Startup story!</p><div className="h-[1.1px] w-[45%] bg-slate-300"></div></div>
  <img src="startup-logo1.png" className="h-16 w-16 z-20 absolute -top-5 -left-3"/>
  {
    (startup.length>0)?
    <div className="px-5 mt-3">
      <div className="relative">
      <img src="https://timesnext.com/content/images/wp-content/uploads/2019/12/team-oyo.jpg" className="w-full h-[250px] rounded-t-3xl shadow-xl startupImg"/>
      <p className="absolute top-[88%] left-2 items-center flex flex-row"><p>Ritesh Agarwal</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
</svg>
</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
</svg>
<p className="text-lg">Hospitality</p></p>
        <p className=" flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
</svg>

<p className="text-lg">16 Billion</p></p>
      </div>
      <div>
        <p className="text-slate-600 text-[15px] mt-2"><span className="text-red-700 text-3xl font-semibold">{}</span>Ritesh Agarwal, the founder of the homegrown unicorn Oyo, has established itself as one of the largest hotels and hospitality chains worldwide, with operations in over 800 cities across 80 countries, including India, the US, China, Europe, China, and more.</p>
        <p className="text-slate-900 text-[15px] my-[5px]"><span className="px-[2px] text-base font-[500]">Fact</span><mark>Ritesh launched Oravel Stays in 2012, later relaunched as Oyo in 2013.</mark></p>
        <p className="text-slate-600 text-[15px]">Airbnb was the biggest source of inspiration for Ritesh, who started on his journey of being one of the best entrepreneur success stories as a teenager.</p>
      </div>
    </div>
    :<div className="flex flex-row items-center justify-center h-full"><p>Generating startup ideas....</p></div>
  }
</div>}

{(third==5)&&
<div className='w-[400px] overflow-scroll example h-[85vh] bg-slate-100 rounded-2xl shadow mt-10 relative'>
  <div className="flex flex-row space-x-2 items-end">
    <img src={budget_logo} className="w-[55px] h-[55px]"/>
  <h1 className="text-xl font-[600] m-2 text-blue-900">Budget Tracker:</h1>
  </div>


<div className="flex flex-row items-center justify-center relative mt-5">
  <div className="absolute right-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-7 h-7">
  <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
</svg>
<p className="text-green-700">20%</p>
</div>
<div className="absolute left-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#007FFF" className="w-7 h-7">
  <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
</svg>
<p className="text-blue-700">16%</p>
</div>
<div className="absolute top-[25px] left-[55px] flex flex-row items-center">
<p className="text-yellow-400">16%</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="w-7 h-7">
  <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
  <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
</svg>

</div>

<div className="absolute top-[25px] right-[55px] flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-7 h-7">
  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
  <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
  <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
</svg>
<p className="text-orange-500">16%</p>
</div>

<div className="absolute bottom-[5px] right-[55px] flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="pink" className="w-7 h-7">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
<p className="text-orange-500">16%</p>
</div>
<div className="absolute bottom-[5px] left-[55px] flex flex-row items-center">
<p className="text-black">16%</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
  <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
</svg>

</div>

<div className="absolute top-[-30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-7 h-7">
  <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
  <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
  <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>
<p className="text-red-500">16%</p>



</div>

{/* middle start */}
{/* <div className="absolute top-[55px] right-[45px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
</svg>

</div>

<div className="absolute bottom-[55px] right-[45px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
</svg>

</div>

<div className="absolute bottom-[55px] left-[50px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" clipRule="evenodd" />
</svg>

</div>

<div className="absolute top-[55px] left-[45px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
</svg>

</div> */}

      <ResponsiveContainer width={250} height={270} className="">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <PieChart width={250} height={400} className="">
          <Pie
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={75}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}

          </Pie>
          <text x={cx+5} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize={22} fontWeight="bold" fill="black">
            {/* {data.reduce((acc, entry) => acc + entry.value, 0)} */}
            ${income_total}
          </text>
          <text x={cx+5} y={cy + 25} textAnchor="middle" dominantBaseline="middle" className="font-[600]" fontSize={20} fill="red">
            ${expense_total}
          </text>
          {[0, 1, 2, 3, 4].map((index) => {
            const angle = (iconAngle * index * Math.PI) / 180; // Convert to radians
            const x = cx + iconRadius * Math.cos(angle);
            const y = cy + iconRadius * Math.sin(angle);
            return (
              <text
                key={`icon-${index}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fill="#000000"
              >
                <h1>{String.fromCharCode(65 + index)}</h1>
              </text>
            );
          })}
        </PieChart>
      </div>
      </ResponsiveContainer>
</div>
<div className="flex flex-row items-center space-x-16 justify-center w-fit m-auto bg-white rounded-xl p-3 shadow px-4">
  <div onClick={()=>{
    setCal(true)
  }}><svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{
    setIncome_expense(true)
  }} viewBox="0 0 24 24" fill="white" className="w-11 h-11 bg-green-600 shadow-xl p-1 rounded-full">
  <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
</svg>
</div>
  <div className="bg-blue-900 shadow-xl px-4 py-[4px] rounded-lg">

    <button className="flex flex-col justify-start"><p className="text-sm text-white font-[300]">Balance</p>
    <p className="text-lg mt-[-5px] font-[500] text-white">${balance}</p></button>
  </div>
  <div onClick={()=>{
    setCal(Cal)
  }}><svg  onClick={()=>{
    setIncome_expense(false)
  }}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-11 h-11 p-1 shadow-xl bg-red-700 rounded-full">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>

</div>
</div>
<div className="p-3 bg-white rounded-t-3xl mt-4">
  <div className="flex flex-row justify-between items-center">
    <p className="font-semibold text-lg">Last records overview</p>

  </div>
  <p className="text-sm my-2 ">LAST 30 DAYS</p>
<div className="flex flex-col space-y-2">
{Object.entries(expense).map(([category, amount])=>{
  return(
    <div>
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row space-x-2 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full shadow bg-white p-2">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>
<div className="leading-4">
  <p>{category}</p>
  <p className="text-sm">Cash</p>
</div>
</div>
<div className="leading-4 flex flex-col justify-end items-end">
  <p className="text-red-700 font-semibold">-${amount}</p>
  <p className="text-sm">Today</p>
</div>
    </div>


<div className="flex flex-row m-auto w-[95%] h-[0.5px] bg-slate-200"></div>
</div>
  )
})  
}
  <p className="text-blue-600">SHOW MORE</p>
  
  </div>
  </div>

  <div className="mt-3 p-2 bg-white h-[60%] w-full">
    <div>
      <p className="text-lg font-semibold">Balance Trend</p>
    </div>
    <div className="flex flex-row items-center justify-between my-2">
      <div className="flex flex-col items-start">
        <p className="text-sm">TODAY</p>
        <p className="text-2xl font-semibold">$40000</p>
      </div>
      <div className="flex flex-col items-end">
      <p className="text-sm">vs past period</p>
        <p className="text-green-500 font-semibold text-xl">+69%</p>
      </div>
    </div>
    <ResponsiveContainer width="100%" height="70%" className="">
        <LineChart
          width={500}
          height={100}
          data={dataLine}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  </div>

</div>

}

{(third==6 && third_aff==0)?
  <div
  className="w-[400px] overflow-hidden example h-[85vh] bg-slate-100 rounded-2xl shadow mt-10 relative"

>
  <div className="flex flex-row items-center justify-center w-full h-full relative">
  <video className="" autoPlay loop key={aff_no}>
        <source src={`./${affimation_list[aff_no].vid}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
<h1 className="text-white z-10  text-2xl  text-center font-semibold absolute" style={{
  fontFamily:"poppins"
}}>{affimation_list[aff_no].name}</h1>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 z-10 absolute top-4 right-4 opacity-70">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
</svg>

<div className="absolute bottom-3 flex flex-row items-center space-x-4">
<svg xmlns="http://www.w3.org/2000/svg" onClick={decrementAff} viewBox="0 0 24 24" fill="white" className="w-8 h-8 z-10 text-white opacity-70">
  <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 z-10  text-red-600">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg"  onClick={incrementAff} viewBox="0 0 24 24" fill="white" className="w-8 h-8 z-10 opacity-70">
  <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
</svg>
</div>
</div>

  <div
    className="absolute inset-0 bg-black opacity-10"
    style={{ zIndex: 1 }}
  >

  </div>
</div>
:(third==6 && third_aff==2)?
<div
  className="w-[400px] overflow-scroll example h-[85vh] bg-white rounded-2xl shadow mt-10"
  // style={{
  //   backgroundImage: `url("")`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // }}
>
  <div className="glass_purpose rounded-b-xl m-2" style={{
    // borderBottomLeftRadius:"15px",
    // borderBottomRightRadius:"15px"
  }}>
    <div className="flex flex-row justify-between items-center p-1 px-3">
      <div className="flex flex-row space-x-2 items-center">
        <img src={life12} className="h-10 w-10"/>
      <p className="text-xl font-[500]">Life Purpose</p>
      </div>
<div className="flex flex-row items-center space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
</div>
    </div>
  </div>


  <div className="glass_purpose p-2 m-5 mx-3">
<div className=" flex flex-row items-center justify-between">
<div className="flex flex-row space-x-1 items-center">
  <img src={goal12} className="h-10 w-10"/>
  <p className="text-xl font-[500]">My Goals</p>
  
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

</div>
<div className='flex flex-col space-y-2 my-2'>
    <div className='flex flex-row justify-between'>
      <p>Progress</p>
      <p className=''>{subP.toFixed(1)}%</p>
    </div>

    <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg progress-bar1 progress-bar5`} ></div>
</div>
       </div>
  </div>
<p className=" text">
I'm a <span className="font-[500] text-lg gradient_text">19-year-old</span> aspiring entrepreneur determined to accumulate <span className="font-[500] text-lg gradient_text">50 lakhs</span> rupees in assets and earn an annual income of <span className="font-[500] gradient_text text-lg ml-2">20+ lakhs within two years</span>, combining earnings from my startup, side hustle, and regular job.</p>
<div className="m-2">
{
  goals.map((i)=>{
    return(
      <div className="flex flex-row items-start space-x-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 progress_bar1">
  <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
</svg>

<p className="text-[15px]">{i}</p>
      </div>
    )
  })
}
</div>
</div>



<div className="glass_purpose p-2 m-5 mx-3">
<div className=" flex flex-row items-center justify-between">
<div className="flex flex-row space-x-1 items-center">
  <img src={vision12} className="h-10 w-10"/>
  <p className="text-xl font-[500]">My Vision</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

</div>
<p className="">
My ultimate goal in life is to achieve success, <span className="font-[500] text-lg gradient_text">wealth</span>, <span className="font-[500] text-lg gradient_text">respect</span>, and <span className="font-[500] text-lg gradient_text">happiness</span>. I envision myself as a successful, well-respected, and wealthy individual, leading a peaceful life surrounded by a loving and supportive family. I aspire to be a proud and happy father, with a caring and <span className="font-[500] text-lg gradient_text">beautiful wife </span>and children who bring joy and respect to our lives.
</p>
</div>

<div className="glass_purpose p-2 m-5 mx-3 relative overflow-hidden">
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[200px] h-[200px] absolute bottom-[-50px] right-[-50px] text-white opacity-[8%]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> */}
<div className=" flex flex-row items-center justify-between">
<div className="flex flex-row space-x-1 items-center">
  <img src={purpose13} className="h-10 w-10"/>
  <p className="text-xl font-[500]">My Purpose</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

</div>
<p className="">
Purpose can guide life decisions, influence behavior, shape goals, offer a sense of direction, and<span className="font-[500] text-lg gradient_text"> create meaning</span>. For some people, purpose is connected to vocation—meaningful, satisfying work. For others, their purpose lies in their responsibilities to their family or friends. Others seek meaning through spirituality or religious beliefs. Some people may find their purpose clearly expressed in all these aspects of life.
</p>
</div>

</div>
:
(third==6 && third_aff==1)&&
  <div
  className="w-[400px] overflow-hidden example h-[85vh] bg-slate-100 rounded-2xl shadow mt-10 relative flex flex-row items-center justify-center"
  // style={{
  //   backgroundImage: `url(${dreamCar})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "contain",
  //   backgroundPosition: "center",
  //   backgroundColor:"#002244"
  // }}
  style={{
    backgroundImage: `url(https://images.unsplash.com/photo-1523251343397-9225e4cb6319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjByb2FkfGVufDB8fDB8fHww&w=1000&q=80)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="flex flex-row justify-between items-center w-full absolute top-0 p-2">
  <div className="flex flex-row items-center space-x-1">
 <img src={`./${dream_carS[dreanmno].logo}.png`} className="h-10 w-10"/>
  <p className="text-white opacity-85 text-lg ">{dream_carS[dreanmno].name}</p>
  </div>
  <svg onClick={incrementCar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
</svg>
  </div>
  <p className="absolute outline_text1 top-[23%] w-full text-center text">{dream_carS[dreanmno].word}</p>
<img src={`./${dream_carS[dreanmno].img}.png`} className="w-[80%] absolute"/>
<SentenceFadeAnimation sentences={sentences} />
</div>
}
</div>
</div>
<div className="hidden mediaShow">
<div className="flex flex-row items-center space-x-1 mt-5">
<svg onClick={()=>{
  dailerFunction(0);
}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
</svg>
<img src={`./${list_change[third]}.png`} className="h-12 w-12"/>
<svg onClick={()=>{
  dailerFunction(1);
}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</div>
</div>
  </div>
  )
}
