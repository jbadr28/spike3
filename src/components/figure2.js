import {Card, Typography, Checkbox, Button} from "@material-tailwind/react";
import "../styles/tailwind.css";
import logo from "../LinkedIn_icon.svg"
function Figure2(){

    return (
        <Card className="flex  justify-center m-8 items-center border-8 border-black py-4" color="transparent" >
            <img className="h-16  mb-8 mt-8" src={logo}
            alt="linkedIn Logo"></img>
            <Typography variant="h4" color="black" className="font-roboto font-bold py-4 m-4">
                You Agree to share the following:
            </Typography>
            <div className="flex  gap-8 max-w-full animate-pulse items-center py-2 m-4">
                <Checkbox className="border-black"></Checkbox>
                <Typography variant="h1" as="div" className="h-10 lg:w-96 w-40 rounded-none bg-gray-500">
                </Typography>
            </div>
            <div className="flex gap-8 max-w-full animate-pulse items-center py-2 m-4">
                <Checkbox className="border-black"></Checkbox>
                <Typography variant="h1" as="div" className=" h-10 lg:w-96 w-40 rounded-none bg-gray-500">
                </Typography>
            </div>
            <div className="flex gap-8 max-w-full animate-pulse items-center py-2 m-4">
                <Checkbox className="border-black"></Checkbox>
                <Typography variant="h1" as="div" className=" h-10 lg:w-96 w-40 rounded-none bg-gray-500">
                </Typography>
            </div>
            <div className="flex gap-8 max-w-full animate-pulse items-center py-2 m-4">
                <Checkbox className="border-black"></Checkbox>
                <Typography variant="h1" as="div" className=" h-10 lg:w-96 w-40 rounded-none bg-gray-500">
                </Typography>
            </div>
            <Button className="flex items-center justify-center mt-6 mb-8 rounded-none h-14 w-1/2 bg-black lg:w-96 w-56" >
            <Typography variant="h4" color="white" className="font-roboto font-bold m-4 ">
                Continue
            </Typography>
            </Button>
        </Card>
    );

        
};

export default Figure2;