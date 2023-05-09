import useBillboard from "@/hooks/useBillBoard";

const Billboard: React.FC = () => {

  const { data } = useBillboard();

  return (
    <div className="relative h-[56.25vw]">
      
    </div>
  )
}
export default Billboard;