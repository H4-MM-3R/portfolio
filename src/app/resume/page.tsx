export default function page() {
    return (
        <div>
            <div className="h-[30vh]"></div>
            <div className="h-screen flex justify-center items-center rounded-xl">
                <iframe src="/resume.pdf" width="50%" height="100%" className="h-[133vh]"></iframe>
            </div>
            <div className="h-[30vh]"></div>
        </div>
    );
}
