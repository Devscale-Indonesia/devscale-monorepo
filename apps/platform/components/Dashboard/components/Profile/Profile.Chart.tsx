import { Card } from '@devscale/shared-ui';

export const Chart = () => {
  return (
    <Card className="min-w-[230px]">
      <div className="space-y-8">
        <h6>Weekly Progress</h6>
        <div className="grid grid-cols-7 gap-5">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => {
            return (
              <div className="space-y-4" key={index}>
                <div className="h-[40px] w-full bg-gradient-to-b from-orange-500 to-orange-300 rounded-lg"></div>
                <div>{day}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
