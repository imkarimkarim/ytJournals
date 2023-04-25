import React from 'react';

const Clock = () => {
    const d = new Date();
    const [currentTime, setCurrentTime] = React.useState('');

    React.useEffect(() => {
        const date = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
        const timer = setInterval(() => {
            setCurrentTime(date);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    return <>{currentTime}</>;
};

export default function Home() {
    return (
        <>
            <main>
                <h1>
                    <Clock />
                </h1>
            </main>
            <style jsx>{`
                main {
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    font-family: 'sans-serif';
                }
            `}</style>
        </>
    );
}
