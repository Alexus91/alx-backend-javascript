const getListStudentIds = (ids) => {
  if (!Array.isArray(ids)) {
    return [];
  }
  const sids = ids.map((item) => item.id);

  return sids;
};

export default getListStudentIds;
