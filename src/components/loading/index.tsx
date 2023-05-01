const Loading = () => {
    return (
        <div className="w-screen h-screen select-none flex justify-center items-center absolute top-0 left-0 bg-black">
            <img src='/assets/imgs/loading.gif' alt="Loading Screen" width={100} />
        </div>
    )    
}

export default Loading;
