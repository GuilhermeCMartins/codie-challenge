import { useState } from "react";
import { ScheduleInterface } from "../utils/types";
import { useRouter } from "next/router";
import { usePokemonContext } from "../../../provider/form-provider";

const useCreateSchedule = () => {
  const [loading, setLoading] = useState(false);
  const { addSchedule, addError } = usePokemonContext();
  const router = useRouter();

  const createSchedule = async (data: ScheduleInterface) => {
    try {
      setLoading(true);
      const response = await fetch("/api/scheduling/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        addSchedule(data);
        router.push("/schedule/feedback?isSuccessful=true");
        return;
      } else if (response.status === 400) {
        addError(await response.json());
        router.push("/schedule/feedback?isSuccessful=false");
      }
    } finally {
      setLoading(false);
    }

    return { success: false };
  };

  return { createSchedule, loading };
};

export default useCreateSchedule;
