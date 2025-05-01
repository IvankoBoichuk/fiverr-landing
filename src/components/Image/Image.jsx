const Image = ({ fileName, alt, ...props }) => {
    if (!fileName || !fileName.includes('.')) {
        console.error('Invalid fileName passed to <Image /> component');
        return null;
    }

    const [name, format] = fileName.split(".");

    return (
        <picture>
            {/* <source 
          srcSet={`/images/${name}.webp 1x, /images/${name}@2x.webp 2x`} 
          type="image/webp" 
        /> */}
            <img
                src={`/images/${name}.${format}`}
                srcSet={`/images/${name}.${format} 1x, /images/${name}@2x.${format} 2x`}
                alt={alt ?? name}
                {...props}
            />
        </picture>
    );
}

export default Image;