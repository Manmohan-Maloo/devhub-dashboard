import Button from "../componants/ui/Button";
import Card from "../componants/ui/Card";

const Dashboard = () => {
  return (
    <div className="grid gap-4">
      <Card>
        <h2 className="text-lg font-semibold mb-2">
          Welcome to DevHub 🚀
        </h2>
        <p className="text-text mb-4">
          This dashboard is built with reusable UI components.
        </p>
        <Button>Create Project</Button>
      </Card>
    </div>
  );
};

export default Dashboard;
