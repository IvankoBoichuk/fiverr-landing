const Image = ({ fileName, alt, loading = "lazy", ...props }) => {
    if (!fileName || !fileName.includes('.')) {
        console.error('Invalid fileName passed to <Image /> component');
        return null;
    }
    const folder = "raw";
    const [name, format] = fileName.split(".");
    return (
        <picture>
            <source 
                srcSet={`/images/${folder}/${name}.webp 1x, /images/${folder}@2x/${name}.webp 2x`} 
                type="image/webp" 
            />
            <img
                src={`/images/${folder}/${name}.${format}`}
                srcSet={`/images/${folder}/${name}.${format} 1x, /images/${folder}@2x/${name}.${format} 2x`}
                alt={alt ?? name}
                loading={loading}
                fetchPriority={loading == "eager" ? "high" : "low"}
                {...props}
            />
        </picture>
    );
}

export default Image;