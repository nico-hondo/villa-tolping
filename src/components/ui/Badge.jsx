const Badge = ({
    badgeName
}) => {
    return(

            <div id="badgeGallery" className="badge-item w-30 font-plus font-semibold px-0 py-2 rounded-full flex justify-center items-center text-center uppercase leading-none">
                {badgeName}
            </div>

    );
}

export default Badge;