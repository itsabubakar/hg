const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#045346]"
                style={{ borderTopColor: 'transparent' }}
            ></div>
        </div>
    );
}

export default Spinner;