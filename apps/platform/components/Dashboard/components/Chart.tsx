import { Card } from '@devscale/shared-ui';

export const Chart = () => {
  return (
    <Card>
      <div className="space-y-8">
        <h5>Weekly Progress</h5>
        <div className="grid grid-cols-7 gap-6">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => {
            return (
              <div className="space-y-4" key={index}>
                <div className="h-[40px] w-full bg-gradient-to-b from-emerald-400 to-indigo-300 rounded-lg"></div>
                <div>{day}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
