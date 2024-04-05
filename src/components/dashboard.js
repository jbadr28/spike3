import {Card, Checkbox, Input,Typography, Button} from "@material-tailwind/react";
import "../styles/tailwind.css";
function Dashboard(){

    return (
        <Card className="flex  flex-col justify-center items-center border-8 border-black gap-6 ">
            <div className="flex lg:flex-row flex-col rounded-none border-black gap-8 p-4 items-center justify-center  bg-gray-600 w-full" >
                <div className="flex flex-row items-center justify-center ">
                    <Checkbox className=" rounded-none h-6 w-6 bg-gray-300" disabled></Checkbox>
                    <Input className="border-black border-2 rounded-none h-4 w-28 " disabled></Input>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <Checkbox className=" rounded-none h-6 w-6 bg-gray-300" disabled></Checkbox>
                    <Input className="border-black border-2 rounded-none h-4 w-28" disabled></Input>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <Checkbox className=" rounded-none h-6 w-6 bg-gray-300" disabled></Checkbox>
                    <Input className="border-black border-2 rounded-none h-4 w-28 " disabled></Input>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <Checkbox className=" rounded-none h-6 w-6 bg-gray-300" disabled></Checkbox>
                    <Input className="border-black border-2 rounded-none h-4 w-28" disabled ></Input>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col h-300 flex-center items-center justify-between lg:gap-24 gap-10">
                <img src="https://placehold.co/350x150" alt="placeholder" className="m-4"> 
                </img>
                <div className="flex flex-col   lg:gap-4 gap-2 items-left lg:m-10 m-5">
                    <Typography variant="h1" as="div" className="lg:h-4 h-2 lg:w-64 w-48 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-96 w-72 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-96 w-72 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-96 w-72 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-72 w-64 rounded-none bg-black "></Typography>
                </div>
            </div>
            <div className="flex rounded-none  gap-8 p-4 items-left justify-center bg-gray-600 w-full" >
            <figcaption className="flex flex-col bottom-8  lg:w-200 w-50 lg:-translate-x-2/4 justify-between rounded-none border border-white bg-black py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm lg:m-8 m-4">
                    <div className="flex flex-col">
                        <Typography variant="h4" color="white">
                            Digitalize your
                        </Typography>
                        <Typography variant="h4" color="white" className="mt-2 font-normal">
                            Experience
                        </Typography>
                        <Button className="flex items-center justify-center mt-6 mb-8 rounded-none lg:h-4 h-24 lg:w-96 w-48 bg-white">
                            <Typography variant="h6" color="black" className="font-roboto font-bold ">
                                Import your Linkedin Profile
                            </Typography>
                        </Button>
                    </div>
                </figcaption>
            </div>
            <div className="flex lg:flex-row flex-col h-300 flex-center items-center justify-between lg:gap-24 gap-10">
                <div className="flex flex-col   lg:gap-4 gap-2 items-left lg:m-10 m-5">
                    <Typography variant="h1" as="div" className="lg:h-4 h-2 lg:w-64 w-48 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-96 w-72 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-96 w-72 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-96 w-72 rounded-none bg-black "></Typography>
                    <Typography variant="h1" as="div" className="lg:h-2 h-1 lg:w-72 w-64 rounded-none bg-black "></Typography>
                </div>
                <img src="https://placehold.co/350x150" alt="placeholder"> 
                </img>
            </div>
            <div className="lg:mt-12 mt-8 mb-1 border border-black border-1">
            <Typography variant="h1" as="div" className="h-2 lg:w-72 w-48 rounded-none bg-black m-4"></Typography>
            </div>
        </Card>
    );
};

export default Dashboard;