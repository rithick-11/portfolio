import todoApp from "./projectImages/todoApp.png"
import gradientGenator from "./projectImages/gradientGenarator.png"
import expensesImg from "./projectImages/expensesManager.png"
import matchGameImg from "./projectImages/matchGame.png"


const ProjcetContsCategory = {
    tool:"Tools",
    genral:"Genral",
    game: "Games"
}

export const mrProjectList = [
    {
        name:"Expenses Calculator",
        category: ProjcetContsCategory.tool,
        projectImg: expensesImg ,
        desc: "An Expenses Calculator is a handy tool designed to help users track and manage their spending. It allows users to input various expenses, categorize them, and calculate the total expenditure over a specific period.",
        siteLink:"https://rithexpensescal.ccbp.tech/"
    },
    {
        name:"Todo List",
        category: ProjcetContsCategory.tool,
        projectImg: todoApp ,
        desc:"A To-Do List application is a simple yet powerful tool designed to help users manage their tasks and stay organized.",
        siteLink:"https://rithmytask.ccbp.tech/"
    },
    {
        name:"Gradient Generator",
        category: ProjcetContsCategory.tool,
        desc:"A CSS Gradient Generator is a tool that helps web designers and developers create gradient backgrounds for their websites.",
        siteLink:"https://rithgradient.ccbp.tech/",
        projectImg: gradientGenator ,
    },
    {
        name:"Match Game",
        category: ProjcetContsCategory.game,
        siteLink:"https://matchgamerith.ccbp.tech/",
        desc:"This game is great for improving memory and concentration, and it can be enjoyed by players of all ages.",
        projectImg: matchGameImg
    }
]