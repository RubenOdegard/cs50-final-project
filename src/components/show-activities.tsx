import { activity } from "@/config/config";
import ActivityCard from "./ui/activity-card";
import { Button } from "./ui/button";
import Link from "next/link";

const ShowActivities = () => {
  return (
    <article className="space-y-4 md:space-y-6">
      <h2>Activity Monitor & Planner</h2>
      <p className="text-muted-foreground">
        A quick overview of my current and upcoming activities, either recently
        completed, ongoing or planned for the near future.
      </p>

      <ul className="list-none mx-0 mt-4 md:mt-6 space-y-4">
        {activity.map((
          {
            id,
            title,
            imageUrl,
            comment,
            place,
            type,
            startDate,
            endDate,
          },
        ) => (
          <li key={id}>
            <ActivityCard
              id={id}
              title={title}
              imageUrl={imageUrl}
              comment={comment}
              place={place}
              type={type}
              startDate={startDate}
              endDate={endDate}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Link href="/activities">
          <Button
            aria-label="show all planned activities"
            className="text-xs sm:text-sm"
            variant="default"
          >
            Show all planned activities
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default ShowActivities;
