const createSnowflakes = () => {
    const snowflakeCount = 10; 

    for (let i = 0; i < snowflakeCount; i++) {

        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.width = `${Math.random() * 5 + 5}px`; 
        snowflake.style.height = snowflake.style.width; 
        snowflake.style.left = `${Math.random() * 100}vw`; 
        

        snowflake.style.animationDuration = `${Math.random() * 8 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`; 


        document.body.appendChild(snowflake);


        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }
};


setInterval(createSnowflakes, 500);
