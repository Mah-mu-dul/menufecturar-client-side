
      setFilterByType(display);
    } else {
      const display = orders?.filter((order) => order.status === status);
      setDisplay(display);