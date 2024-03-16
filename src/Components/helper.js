import Home from "@mui/icons-material/Home";
import Code from "@mui/icons-material/Code";
import Preview from "@mui/icons-material/Preview";
import Draw from "@mui/icons-material/Draw";
import Face from "@mui/icons-material/Face";

function setIcon(PageName){
    switch (PageName) {
        case "Development":
          return <Code/>;
          break;
        case "Design":
          return <Preview/>;
          break;
        case "Art":
          return <Draw/>;
          break;
        case "About":
          return <Face/>;
          break;
        default:
          return <Home/>;
          break;
      }
  }

  export {setIcon};