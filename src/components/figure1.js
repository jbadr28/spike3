import logo from "../LinkedIn_icon.svg"
import "../styles/tailwind.css";
import {
    Card,
    Button,
    Input
  } from "@material-tailwind/react";
function Figure1(){

    return (
    <Card className="flex flex-center justify-center items-center  border-8 border-black   " color="transparent" >
        <img className="h-16  mb-8 mt-8" src={logo}
        alt="linkedIn Logo"></img>

        <form className="m-20 lg:w-80 w-40 max-w-screen-lg gap-16">
            <div className="mb-1 flex flex-col gap-6">
            <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-80 w-40 rounded-none bg-gray-100"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
            />
            <Input
                type="password"
                size="lg"
                placeholder="********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 gray-200 focus:!border-t-gray-900 rounded-none lg:w-80 w-40  bg-gray-100"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
            />
            </div>
        <Button className="mt-6 mb-8 bg-black lg:w-80 w-40" fullWidth>
          <h1 className="font-roboto font-bold">Connect My LinkedIn Account</h1>
        </Button>
      </form>
    </Card>
    );

};

export default Figure1;