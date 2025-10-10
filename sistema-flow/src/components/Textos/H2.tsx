interface H2Props {
    children: React.ReactNode
}

const H2 = ({children}: H2Props) => {
    return ( 
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {children}
        </h2>
     );
}
 
export default H2;