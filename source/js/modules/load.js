export default () => {
    document.body.onload = () => {
        document.body.className = "loaded"

        setTimeout(() => {
            document.body.className += " welcome-animation-end";
        }, 1000)
    };
};
  