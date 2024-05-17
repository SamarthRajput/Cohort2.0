function Responsive(){
return (
    <>
        {/* md: says when the md breakpoint is reached anything above it will use bg-blue and by default it will use bg-red */}
        <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="bg-red-400">Hello</div>
            <div className="bg-blue-400">Hey</div>
            <div className="bg-green-300">Hi</div>
        </div>
    </>
)

}

export default Responsive